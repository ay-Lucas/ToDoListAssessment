# Summary

## 1. React.js Basics

Used useCallback to prevent re-renders in the ToDoList component.

## 2. Next.js Routing

Implemented client side routing by creating a Navbar client component and adding buttons that when clicked, call the built in redirect method to the respective pages.

## 3. API integration

Created a JSON server on port 3001 that serves todo list data from ./mock/db.json. The Home page calls a server action that fetches todo data from the JSON server.

## 4. Node.js Server

Set up Express js server to also serve todos to client.

## 5. Middleware

Add middleware that logs request information

## 6. Database Interaction

Connected the node.js server to postgresql db using the pg library. Implemented CRUD operations (get, create, update, delete) for a users table. Used parameterized queries to prevent SQL injection. Challenges with TypeScript types.

## 7. Database Schema

Designed a schema with Users, Posts, and Comments tables, maintaining relationships between them.
