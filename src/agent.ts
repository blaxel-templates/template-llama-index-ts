import { blModel, blTools } from "@blaxel/llamaindex";
import { agent } from "@llamaindex/workflow";
import { tool } from "llamaindex";
import { z } from "zod";

export default async function myagent(input: string): Promise<string> {
  const tools = await blTools(["blaxel-search"]);
  const llm = await blModel("sandbox-openai");

  const response = await agent({
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
    llm: llm as any,
    verbose: false,
  }).run(input);

  return (response as any).data?.result || response.toString();
}
