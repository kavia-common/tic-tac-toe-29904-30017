#!/bin/bash
cd /home/kavia/workspace/code-generation/tic-tac-toe-29904-30017/TicTacToeWebApp
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

