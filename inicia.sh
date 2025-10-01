#!/bin/bash

# Caminho base do projeto
PROJETO_DIR="$HOME/progetos/Neurelix/Principal"

# Ir para o diretório do projeto
cd "$PROJETO_DIR" || {
  echo "❌ Diretório não encontrado: $PROJETO_DIR"
  exit 1
}

# Iniciar o servidor Node.js em segundo plano e salvar o PID
echo "🚀 Iniciando servidor Node.js..."
nohup npm run dev > server.log 2>&1 &
echo $! > .pid_node
