#!/bin/bash

# Renomeia imagens em public/images para formato URL-friendly
# Converte espaços em hífens e remove acentos

cd "$(dirname "$0")/../public/images" || exit 1

for file in *; do
  # Pula diretórios
  [ -d "$file" ] && continue

  # Converte espaços para hífens
  new_name=$(echo "$file" | tr ' ' '-')

  # Remove acentos (normalização NFKD, remove diacríticos)
  new_name=$(echo "$new_name" | PYTHONIOENCODING=utf-8 python -c "import sys, unicodedata; s = sys.stdin.read().strip(); print(''.join(c for c in unicodedata.normalize('NFKD', s) if not unicodedata.combining(c)))" | sed 's/[^a-zA-Z0-9._-]//g')

  # Converte para lowercase
  new_name=$(echo "$new_name" | tr '[:upper:]' '[:lower:]')

  # Renomeia se diferente
  if [ "$file" != "$new_name" ] && [ -n "$new_name" ]; then
    mv "$file" "$new_name"
    echo "✓ $file → $new_name"
  fi
done

echo ""
echo "Renomeação concluída!"
ls -lah
