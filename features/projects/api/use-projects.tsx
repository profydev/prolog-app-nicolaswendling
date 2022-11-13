import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Project } from "../types/project.types";

async function getProjects() {
  const { data } = await axios.get("https://prolog-api.profy.dev/project");

  const newData = [...data].map((project) => {
    let newStatus = "warning";

    if (project.status === "info") {
      newStatus = "stable";
    }

    if (project.status === "error") {
      newStatus = "critical";
    }

    return { ...project, status: newStatus };
  });

  return newData;
}

export function useProjects() {
  return useQuery<Project[], Error>(["projects"], getProjects, {
    staleTime: 60000,
  });
}
