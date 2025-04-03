import { blModel, blTools, logger } from "@blaxel/sdk";
import { agent, AgentStream, tool, ToolCallLLM } from "llamaindex";
import { z } from "zod";
interface Stream {
  write: (data: string) => void;
  end: () => void;
}

export default async function myagent(
  input: string,
  stream: Stream
): Promise<void> {
  const streamResponse = agent({
    llm: (await blModel(
      "sandbox-openai"
    ).ToLlamaIndex()) as unknown as ToolCallLLM,
    tools: [
      ...(await blTools(["blaxel-search"]).ToLlamaIndex()),
      tool({
        name: "weather",
        description: "Get the weather in a specific city",
        parameters: z.object({
          city: z.string(),
        }),
        execute: async (input) => {
          logger.debug("TOOLCALLING: local weather", input);
          return `The weather in ${input.city} is sunny`;
        },
      }),
    ],
    systemPrompt: "If the user ask for the weather, use the weather tool.",
  }).run(input);

  for await (const event of streamResponse) {
    if (event instanceof AgentStream) {
      for (const chunk of event.data.delta) {
        stream.write(chunk);
      }
    }
  }
  stream.end();
}
