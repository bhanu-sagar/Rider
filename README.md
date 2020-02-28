# Comingoo Rider Mobile Application

## Getting Started

### Prerequisites

- NPM

```
npm install npm@latest -g
```

- React Native Client

```
https://facebook.github.io/react-native/docs/getting-started
```

### Installing

1- Clone the repo.

```
https://github.com/comingoo/comingoo-rider.git
```

2- Install NPM packages

```
npm install
```

3- Run pod install in ios directory.

```
cd ios/
pod install
```

If any problem here, try delete to Pods and Podfile.lock in ios and then again pod install.

4- Now, you are ready!

```
cd ..
react-native run-android or react native-run-ios
```

### Development Standarts

1. Create a new branch for the task with the format <sprint_name>/c-<card_id> (e.g. sprint1/5-create-basic-structure) from development P.S. You can find card_id at the last path of trello url. e.g. https://trello.com/c/<board_id>/<card_id>

2. Push the working code daily (Error free) in your branch.

3. Commit message format: <card_number>: <message> for e.g. c-5: created basic structure.

4. Once ready for the PR, merge the development branch code into your branch. Resolve conflicts/fixes if any.

5. Create PR (Pull Request) for your branch to be merged in development.

6. PM will assign any developer to review the code, if any fixes, he'll request to change, the developer will again follow the above standard, otherwise the reviewer will approve the code and assign SQA Engineer to checkout the PR. Finally after both approvals, developer will merge code in master.
