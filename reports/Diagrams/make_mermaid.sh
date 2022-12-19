#!/usr/bin/env bash
# Documentation here https://github.com/mermaid-js/mermaid-cli#alternative-installations

docker run --rm -u `id -u`:`id -g` -v C:\Users\pipgr\WebstormProjects\wa4e-v2\reports\Diagrams\mermaidFiles\:/data minlag/mermaid-cli -i C:\Users\pipgr\WebstormProjects\wa4e-v2\reports\Diagrams\mermaidFiles\structure.mmd

