# Agentic AI

## Purpose

Artificial intelligence tools are increasingly capable of executing commands, modifying files, submitting computational jobs, and making decisions on behalf of users. These capabilities can improve research productivity, but they also introduce risks that differ substantially from those associated with traditional software and machine-learning workloads.
AI agents can take actions that are unintended by the researcher, generate large numbers of processes or jobs, consume resources unexpectedly, modify or delete data, or otherwise adversely affect shared computing infrastructure. Because the behavior of agentic systems may be probabilistic and difficult to reconstruct after an incident, additional safeguards are necessary when these tools interact with University of Arizona high-performance computing (HPC) systems.
This policy establishes requirements for the use of agentic AI, autonomous workflows, coding assistants, large language models (LLMs), and traditional machine-learning applications on University of Arizona Research Computing HPC systems.

## Policy

AI agents may not independently create, submit, modify, or operate HPC jobs or execute system commands without explicit user approval of the actions being performed.
Users must maintain meaningful human oversight of agentic AI activity. Fully autonomous or unattended control of HPC system commands, job submission, file systems, processes, or network activity is prohibited.
Users must not provide AI agents with credentials in a manner that unnecessarily exposes or transfers control of those credentials. Passwords, private SSH keys, API tokens, and other authentication secrets must not be placed directly into prompts, agent context, or other unprotected AI input.
Agentic activity that violates these requirements is subject to immediate termination.
Research Computing may suspend or terminate an AI agent, process, session, or associated HPC job when its behavior creates or reasonably appears likely to create a risk to system availability, performance, security, data integrity, or other users.

[Download Full Policy Document](./files/Policy-for-AI-Agents.docx){ .md-button .md-button--primary}


## Summary

|**Type of AI Use**|**HPC Policy**|
|-|-|
|Traditional machine learning / deep learning| Permitted|
|LLM inference and chatbots| Permitted|
|AI coding assistant that suggests or edits code under user supervision| Permitted|
|Agent executing commands with explicit user review and approval| Permitted with restrictions|
|Agent independently submitting or operating HPC jobs| Prohibited|
|Unattended agent controlling system commands, files, or HPC resources| Prohibited|
|Autonomous iterative AI workflows| Prohibited|
|Autonomous spawning or operation of subagents| Prohibited|
|Computationally intensive agent activity on login nodes| Prohibited|
|Unsupervised destructive or high-impact system/file operations| Prohibited|
