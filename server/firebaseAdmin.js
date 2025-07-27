import { initializeApp, cert, getApps, getApp } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";

const serviceAccount = {
  type: "service_account",
  project_id: "chatnext-clone",
  private_key_id: "62b90366194c3cf4e9af0235c49d1a7bd05c6c63",
  private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQChYtjKWzB04Pw3\n0omXcikskHIA8nRgS6bskK2uI9HsDb9J45OKfapItab5xxZ+4s0rJEbanUAhsjpH\nCLLN8DIGWeTuF5WGpxpXmnyek+CNchd/bHFgVJvST7NZ6WeoQ92C8W7htsox0yvo\n8Ulhik0uz+J2A96UXlHg8fuq0UTJxtNhFlSghSiOYrq0//qdYJ667zHeFmOzPQoG\n7fHp9/lxyGUm+pjtWE0b3FCzvnN844Insyiv6FUPT56B5ydNmqkbKilrPRVGDMkm\n1WSD+0aLLFwZyonxSgIRabYX6GC+bI/TBRMG88AL2jQw6UtwwGp2eOt0YvhM3yGG\nNu9w4DITAgMBAAECggEAFnIJJRULXL4We2xl5DElpoPibzJJWu6P+pKMAqO1ubHB\nxd+HxiOrJW3/mU6wrhi8y0AXi1EtObfa4MVGGlv1QSqLK01kEkm3DAcO8lPZJSMA\nlKF69UMJ4aAMbuKw9CyYKB2MZopwfanZOg57k7wooZbvxVUixZoxThVUWLy+kfIY\nxDeaR+vTC8Oqx7In6D2Gtj4TeoWhjFQIfjx0yDf37/d1wCFkq1sW2gdQ9RiCDPSJ\nPEKGzFf46/Z95KN3TILf8WX6Tlffk0ON9M8P2mbwkBaNzG354e/dzDIlL9j6n7iV\nXaOhoJj5bE2/+6xeBHfNZZyinpx05xNezwCYJXuitQKBgQDVdqVjXLY7tu9LsGHD\nceEaP8dIN3SYFfRFngqxb4TOiSuwptFsq5RM2fSpQMKfEHBcDCd64QLv3HL5akyd\nF5pNDLmRWssdiVhv6jzeKxy7smyuOcxevIidWpmc1jziwnCBL3iRmGI2jUmAHJyO\nbT7lCywbQq+TFm/Z0PEHfP8U5wKBgQDBi5ftDSGPXl2loDxH9rBT6aXZZBfOc8VO\nUtUKMAwnH58iE3Hl51NqshqmQz0DczweQQAbsafRh04d4dKhKtKslxvj1g78O1KB\nJ9IpiaWIhPlaPC1+kpy2CR7qi31QkXPzFurOdzKLcEYgdzWIq6hgnCxyaGQ/lfKj\nJo5swp4n9QKBgQCy5GLIeaszMiUrDl9wFuDqSabt66OnzUZQjZkyiF4JZMWbnsIF\ny2lWWpaCvYYdHf679WekwCvg7qPgSGh6goxKpC5kFW4Bi9f0up5WJlVHK8mO3Vtb\nza7ECGiSGq0d8IuuiCUIB2fPheqiFdhSOFWsSAentORFZVlJdqR4fRWc4wKBgAN2\n0ShQBNrBEKIHRSzwkGVgGDTU4swyLETjnKaLB5ynpzx/5pj70/Vj7LAvIedu55OP\nDEZynpNUfaRxR0jVMGIgbkJcsXX4RdjD8rIFoa3Y23GvBA1w6FclwKToDD0l7VJb\nhaZeYcw3HTo1iALDN8dK5EzD649ryqT66q+tqBEFAoGAZ3qT1o2duI7aOD0aLb0s\ncf4OeTHG1QV7yBQXqZWkIMIJOvxeUwsJBBaAlk9wciwTSs3hgNnBNXubixyUba8K\nauUfWdZiBN4kRBUZE9fhcZxeDN9OtJEl8pfp3v3K+rNNx8NPxwuQXzLmd69kOwhN\nWO/Qz6WfYnVpKu1HIYNX72Y=\n-----END PRIVATE KEY-----\n",
  client_email: "firebase-adminsdk-fbsvc@chatnext-clone.iam.gserviceaccount.com",
  client_id: "104171227163748278671",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-fbsvc%40chatnext-clone.iam.gserviceaccount.com",
};

const app = getApps().length === 0 ? initializeApp({ credential: cert(serviceAccount) }) : getApp();
export const adminAuth = getAuth(app);
