import { APIError } from "./APIError";

const INTERNAL_SERVER_ERROR_API_ERROR = new APIError(
    0,
    "An unknwon internal server error occured while processing your request. Please try again later."
)

const RESOURCE_NOT_FOUND_API_ERROR = new APIError(0,"Requested resource not found.");

export { INTERNAL_SERVER_ERROR_API_ERROR, RESOURCE_NOT_FOUND_API_ERROR };

