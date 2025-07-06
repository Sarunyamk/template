import { ZodError } from "zod";

interface DefaultResponse {
  message?: string | ZodError;
  error?: string | ZodError;
  count?: BatchPayload | number;
}

interface BatchPayload {
  count: Long!;
}
