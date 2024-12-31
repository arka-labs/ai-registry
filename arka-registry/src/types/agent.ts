export interface Action {
  method: "GET" | "POST" | "PUT" | "DELETE";
  action_url: string;
  description: string;
  request_body: Record<string, unknown>;
}

export interface ActionsConfig {
  api_base_url: string;
  actions: Action[];
}

export interface Owner {
  name: string;
  contact: string;
}

export interface KnownChain {
  network: string;
  address: string;
  smart_contract: string;
  abi: string;
}

export interface Metadata {
  id: string;
  name: string;
  type: string;
  owner: Owner;
  known_chains: KnownChain[];
  version: string;
  last_updated: string;
  description: string;
}

export interface Persona {
  persona: string;
  appearance: string;
  backstory: string;
}

export interface Agent {
  metadata: Metadata;
  actions: ActionsConfig;
  persona: Persona;
}

export interface Provider {
  name: string;
  display_name: string;
}
