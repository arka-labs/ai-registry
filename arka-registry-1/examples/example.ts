// Import the agents from the package (simulating a real usage scenario)
import { agents } from "../src/index"; // This imports from the current package

// Log all available agents to the console
console.log("Available Agents:", agents);

// Example usage: Access a specific agent and its metadata
const agentKeys = Object.keys(agents);
if (agentKeys.length > 0) {
  const firstAgentKey = agentKeys[0];
  const firstAgent = agents[firstAgentKey];

  console.log(`Details of the first agent (${firstAgentKey}):`);
  console.log("Metadata:", firstAgent.metadata);
  console.log("Actions:", firstAgent.actions);
  console.log("Persona:", firstAgent.persona);
} else {
  console.log("No agents available.");
}
