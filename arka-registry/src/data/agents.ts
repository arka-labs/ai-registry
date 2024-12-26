
  import { Agent } from '../types/agent';

  const agents: Record<string, Agent> = {
  "cosmos-agent": {
    "metadata": {
      "id": "cosmos-agent",
      "name": "Agent XYZ",
      "type": "Chatbot",
      "owner": {
        "name": "Company or Individual Name",
        "contact": "Contact Information"
      },
      "known_chains": [
        {
          "network": "Cosmos",
          "address": "cosmos...",
          "smart_contract": "SmartContractName",
          "abi": "URL or path to ABI"
        }
      ],
      "version": "1.0",
      "last_updated": "YYYY-MM-DD",
      "description": "A brief description of what the agent does and its capabilities."
    },
    "actions": {
      "api_base_url": "https://api.example.com",
      "actions": [
        {
          "method": "GET",
          "action_url": "/data",
          "description": "Retrieve data through this service.",
          "request_body": {}
        },
        {
          "method": "POST",
          "action_url": "/update",
          "description": "Update data using this service.",
          "request_body": {}
        }
      ]
    },
    "persona": {
      "persona": "Friendly Advisor",
      "appearance": "Text-based",
      "backstory": "Developed to assist with specific tasks, functioning within the blockchain framework."
    }
  },
  "example-agent": {
    "metadata": {
      "id": "agentxyz",
      "name": "Agent XYZ",
      "type": "Chatbot",
      "owner": {
        "name": "Company or Individual Name",
        "contact": "Contact Information"
      },
      "known_chains": [
        {
          "network": "Ethereum",
          "address": "0x123...",
          "smart_contract": "SmartContractName",
          "abi": "URL or path to ABI"
        }
      ],
      "version": "1.0",
      "last_updated": "YYYY-MM-DD",
      "description": "A brief description of what the agent does and its capabilities."
    },
    "actions": {
      "api_base_url": "https://api.example.com",
      "actions": [
        {
          "method": "GET",
          "action_url": "/data",
          "description": "Retrieve data through this service.",
          "request_body": {}
        },
        {
          "method": "POST",
          "action_url": "/update",
          "description": "Update data using this service.",
          "request_body": {}
        }
      ]
    },
    "persona": {
      "persona": "Friendly Advisor",
      "appearance": "Text-based",
      "backstory": "Developed to assist with specific tasks, functioning within the blockchain framework."
    }
  }
};

  export default agents;
  