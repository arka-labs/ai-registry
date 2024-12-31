import agents from "./data/agents";
import { Agent } from "./types/agent";
import { Provider } from "./types/provider";
import providers from "./data/provider";

/**
 * ArkaRegistry is a class responsible for managing a collection of agents.
 * It provides methods to retrieve individual agents, all agents, and agent names.
 */
class ArkaRegistry {
  private agents: Record<string, Agent>;
  private providers: Provider[];

  constructor() {
    this.agents = agents || {}; // Default to an empty object if `agents` is undefined
    this.providers = providers
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

  /**
   * Retrieves all providers.
   * @returns providers-list
   */
  public getProviders(): Provider[] {
    return this.providers;
  }
}

export default ArkaRegistry;
