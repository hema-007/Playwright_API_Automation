export interface Params {
  a: string;
  c: string;
  d: string;
  h: string;
  s: string;
  bh: string;
  b: string;
}

export interface DkimSignature {
  value: string;
  params: Params;
}

export interface Params2 {
  boundary: string;
}

export interface ContentType {
  value: string;
  params: Params2;
}

export interface Value {
  address: string;
  name: string;
}

export interface From {
  value: Value[];
  html: string;
  text: string;
}

export interface Value2 {
  address: string;
  name: string;
}

export interface To {
  value: Value2[];
  html: string;
  text: string;
}

export interface Unsubscribe {
  name: string;
}

export interface List {
  unsubscribe: Unsubscribe;
}

export interface HeaderLine {
  key: string;
  line: string;
}

export interface Value3 {
  address: string;
  name: string;
}

export interface To2 {
  value: Value3[];
  html: string;
  text: string;
}

export interface Value4 {
  address: string;
  name: string;
}

export interface From2 {
  value: Value4[];
  html: string;
  text: string;
}

export interface MailSource {
  headers: Headers;
  headerLines: HeaderLine[];
  html: string;
  text: string;
  textAsHtml: string;
  subject: string;
  date: string;
  to: To2;
  from: From2;
  messageId: string;
}

interface EmailData {
  _id: string;
  to_username: string;
  to_domain: string;
  mail_source: MailSource;
  is_deleted: boolean;
  is_read: boolean;
  sender_time: Date;
}

export interface EmailBody {
  status: string;
  data: EmailData[];
}
