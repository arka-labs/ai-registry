const fs = require('fs');
const path = require('path');

const AGENTS_DIR = path.resolve(__dirname, '../../agents');
const OUTPUT_FILE = path.resolve(__dirname, '../src/data/agents.ts');

function loadAgents() {
  const agents = {};

  const agentDirs = fs.readdirSync(AGENTS_DIR).filter((dir) => {
    const agentPath = path.join(AGENTS_DIR, dir);
    return fs.statSync(agentPath).isDirectory();
  });

  for (const agentDir of agentDirs) {
    const agentPath = path.join(AGENTS_DIR, agentDir);
    try {
      const metadata = JSON.parse(
        fs.readFileSync(path.join(agentPath, 'metadata.json'), 'utf-8')
      );
      const actions = JSON.parse(
        fs.readFileSync(path.join(agentPath, 'actions.json'), 'utf-8')
      );
      const persona = JSON.parse(
        fs.readFileSync(path.join(agentPath, 'persona.json'), 'utf-8')
      );

      agents[agentDir] = { metadata, actions, persona };
    } catch (err) {
      console.error(`Error loading agent ${agentDir}:`, err);
    }
  }

  return agents;
}

function buildAgents() {
  const agents = loadAgents();
  const content = `
  import { Agent } from '../types/agent';

  const agents: Record<string, Agent> = ${JSON.stringify(agents, null, 2)};

  export default agents;
  `;

  fs.writeFileSync(OUTPUT_FILE, content, 'utf-8');
  console.log('Agents file generated successfully:', OUTPUT_FILE);
}

buildAgents();
