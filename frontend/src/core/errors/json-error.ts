export class JsonError {
  private defaultId = -1;
  private defaultLinks = {
    about: 'No links provided'
  };
  private defaultStatus = 'No status provided';
  private defaultCode = 'No code provided';
  private defaultTitle = 'An unknown error occurred';
  private defaultDetail = 'No detail provided';
  private defaultSource = {
    pointer: 'No pointer provided',
    parameter: 'No parameter provided'
  };
  private defaultMeta = 'No meta details provided';

  // A unique identifier for this particular occurrence of the problem.
  id: number = this.defaultId;
  // A links object containing the following members:

  links: {
    // A link that leads to further details about this particular occurrence of the problem.
    about: string;
  } = this.defaultLinks;

  // The HTTP status code applicable to this problem, expressed as a string value.
  status: string = this.defaultStatus;

  // An application-specific error code, expressed as a string value.
  code: string = this.defaultCode;

  // A short, human-readable summary of the problem that SHOULD NOT change from occurrence to occurrence of the problem,
  // except for purposes of localization.
  title: string = this.defaultTitle;

  // A human-readable explanation specific to this occurrence of the problem. Like title, this field’s value can be localized.
  detail: string = this.defaultDetail;

  // An object containing references to the source of the error, optionally including any of the following members:
  source: {
    // A JSON Pointer [RFC6901] to the associated entity in the request document
    // [e.g. "/data" for a primary data object, or "/data/attributes/title" for a specific attribute].
    pointer: string;
    // A string indicating which URI query parameter caused the error.
    parameter: string;
  } = this.defaultSource;

  meta?: any = this.defaultMeta; // A meta object containing non-standard meta-information about the error.
  constructor(
    id?: number,
    status?: string,
    code?: string,
    title?: string,
    detail?: string,
    links?: { about: string },
    source?: { pointer: string; parameter: string },
    meta?: any
  ) {
    this.id       = id      || this.id;
    this.links    = links   || this.links;
    this.status   = status  || this.status;
    this.code     = code    || this.code;
    this.title    = title   || this.title;
    this.detail   = detail  || this.detail;
    this.source   = source  || this.source;
    this.meta     = meta    || this.meta;
  }
}
