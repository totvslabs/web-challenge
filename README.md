# TOTVS Labs Coding Challenge - Web
Our Angular coding challenge is a web-app to list and post a short pitch of your company idea looking for investors. Where a user can see the recently posted messages and post their own. We have a base Angular App and local Node Server ready to run. 

We want to see your code quality, organization, understanding and contribution to the project.

For the sake of simplification, we assume the user is already logged and authenticated on the environment.

Following we have the list of requirements and information about the current App:

# Requirements

## Main requirements

1. Post Message Form:
	Opening on the side panel, we will have two types of messages for the user to choose:

	A. Type: Comment
		- content (required)

	B. Type: Pitch
		- company name
		- pitch (required)
		- company evaluation ($ - required)
		- shares offering (% - required > 0)
		- price for the amount of shares ($ - required)

2. The field "shares offering (%)" should be a slider component
3. Ways to close the side panel
4. Use the route to activate the side panel (some child route like: /message)
5. When clicking on a user name, open the Side panel with the Post Message Form, and the content as "@username" fulfilled
6. Add a State Management solution for Users and Messages (anything from a simple RxJS service, to a more robust solution such as Akita or NgRX)

## Extra (choose one or more of these topics)
- Improve the overall look and feel
- Enforce Types everywhere
- Search messages by content
- Organize the PostMessage Components on a Angular Module with Lazy loading
- Test for Services and Components
- Your contributions: what can you do to make it better?

# App Info

## APIs available on the NodeJS server

- GET /api/messages
- POST /api/message
- GET /api/users
- GET /api/user/current

```
Note: improvements on the sample NodeJS server are a plus, but keep in mind the challenge and evaluation is focused on the FrontEnd side of the project
```

## Scripts to run the app

Server:
```npm run start.server```

Angular app:
```npm start```

# Evaluation Criteria

* Understanding of core Javascript/Typescript concepts
* Understanding of Angular and RxJs
* Code and component reusability/scalability/best practices
* Code design
* Understanding of the project and contributions
