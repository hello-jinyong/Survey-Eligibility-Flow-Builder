import { api } from "../utils/axios";
import type { Survey } from "./types";

export const createSurvey = (data: Partial<Survey>) =>
    api.post("/surveys", data);

export const getSurveys = (page: number, limit: number) =>
    api.get(`/surveys?page=${page}&limit=${limit}`);
