import agents from "./data/agents"; // Ensure this is a properly structured object
import { Agent } from "./types/agent"; // Ensure the Agent type is correctly defined

class ArkaRegistry {
  private agents: Record<string, Agent>;

  constructor() {
    this.agents = agents || {}; // Default to an empty object if `agents` is undefined
  }

  /**
   * Retrieve a specific agent by name.
   * @param agentName - The name of the agent to retrieve.
   * @returns The agent if found, otherwise undefined.
   */
  public getAgent(agentName: string): Agent | undefined {
    return this.agents[agentName];
  }

  /**
   * Retrieve all agents as an array.
   * @returns An array of all agents.
   */
  public getAllAgents(): Agent[] {
    return Object.values(this.agents);
  }

  /**
   * Retrieve all agent names.
   * @returns An array of agent names.
   */
  public getAgentNames(): string[] {
    return Object.keys(this.agents);
  }
}

export default ArkaRegistry;
