#!/bin/bash

echo "Creating schema TYPEORM SCHEMA"
psql -U postgres -d postgress_migration -c "CREATE SCHEMA IF NOT EXISTS sync;"
# Agrega más comandos SQL según sea necesario