export interface AgentMetadata {
    id: string;
    name: string;
    type: string;
    owner: {
      name: string;
      contact: string;
    };
    known_chains: {
      network: string;
      address: string;
      smart_contract: string;
      abi: string;
    }[];
    version: string;
    last_updated: string;
    description: string;
  }
  
  export interface AgentActions {
    api_base_url: string;
    actions: {
      method: string;
      action_url: string;
      description: string;
      request_body: object;
    }[];
  }
  
  export interface AgentPersona {
    persona?: string;
    appearance?: string;
    backstory?: string;
  }
  
  export interface Agent {
    metadata: AgentMetadata;
    actions: AgentActions;
    persona: AgentPersona;
  }
  