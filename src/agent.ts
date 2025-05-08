import { blModel, blTools } from "@blaxel/llamaindex";
import { agent, AgentStream, tool } from "llamaindex";

import { z } from "zod";
interface Stream {
  write: (data: string) => void;
  end: () => void;
}

export default async function myagent(
  input: string,
  stream: Stream
): Promise<void> {
  const tools = await blTools(["blaxel-search"]);
  const llm = await blModel("sandbox-openai");
  const streamResponse = agent({
    llm,
    tools: [
      ...tools,
      tool({
        name: "weather",
        description: "Get the weather in a specific city",
        parameters: z.object({
          city: z.string(),
        }),
        execute: async (input) => {
          console.debug("TOOLCALLING: local weather", input);
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
