import * as types from "./constants"

const initialState = {
  contacts: [],
  crowdboticstestAPI: [],
  customTexts: [],
  forwardedMessages: [],
  homePages: [],
  messages: [],
  messageActions: [],
  profiles: [],
  signups: [],
  threads: [],
  threadActions: [],
  threadMembers: [],
  users: [],
  verificationCodes: [],
  logins: [],
  passwordChanges: [],
  passwords: [],
  passwordResetConfirms: [],
  verifyEmails: [],
  userDetails: []
}

export default function apiReducer(state = initialState, action) {
  switch (action.type) {
    case types.API_V1_CONTACT_LIST:
    case types.API_V1_CONTACT_LIST_SUCCEEDED:
      return Object.assign({}, state, {
        contacts: [...state.contacts, action.response]
      })
    case types.API_V1_CONTACT_LIST_FAILED:
      return Object.assign({}, state, {
        crowdboticstestAPI: [...state.crowdboticstestAPI, action.response]
      })
    case types.API_V1_CONTACT_CREATE:
    case types.API_V1_CONTACT_CREATE_SUCCEEDED:
      return Object.assign({}, state, {
        contacts: [...state.contacts, action.response]
      })
    case types.API_V1_CONTACT_CREATE_FAILED:
      return Object.assign({}, state, {
        crowdboticstestAPI: [...state.crowdboticstestAPI, action.response]
      })
    case types.API_V1_CONTACT_READ:
    case types.API_V1_CONTACT_READ_SUCCEEDED:
      return Object.assign({}, state, {
        contacts: [
          ...state.contacts.filter(record => record.id !== action.response.id),
          action.response
        ]
      })
    case types.API_V1_CONTACT_READ_FAILED:
      return Object.assign({}, state, {
        crowdboticstestAPI: [...state.crowdboticstestAPI, action.response]
      })
    case types.API_V1_CONTACT_UPDATE:
    case types.API_V1_CONTACT_UPDATE_SUCCEEDED:
      return Object.assign({}, state, {
        contacts: state.contacts.map(record =>
          record.id === action.response.id ? action.response : record
        )
      })
    case types.API_V1_CONTACT_UPDATE_FAILED:
      return Object.assign({}, state, {
        crowdboticstestAPI: [...state.crowdboticstestAPI, action.response]
      })
    case types.API_V1_CONTACT_PARTIAL_UPDATE:
    case types.API_V1_CONTACT_PARTIAL_UPDATE_SUCCEEDED:
      return Object.assign({}, state, {
        contacts: state.contacts.map(record =>
          record.id === action.response.id ? action.response : record
        )
      })
    case types.API_V1_CONTACT_PARTIAL_UPDATE_FAILED:
      return Object.assign({}, state, {
        crowdboticstestAPI: [...state.crowdboticstestAPI, action.response]
      })
    case types.API_V1_CONTACT_DELETE:
    case types.API_V1_CONTACT_DELETE_SUCCEEDED:
    case types.API_V1_CONTACT_DELETE_FAILED:
      return Object.assign({}, state, {
        crowdboticstestAPI: [...state.crowdboticstestAPI, action.response]
      })
    case types.API_V1_CUSTOMTEXT_LIST:
    case types.API_V1_CUSTOMTEXT_LIST_SUCCEEDED:
      return Object.assign({}, state, {
        customTexts: [...state.customTexts, action.response]
      })
    case types.API_V1_CUSTOMTEXT_LIST_FAILED:
      return Object.assign({}, state, {
        crowdboticstestAPI: [...state.crowdboticstestAPI, action.response]
      })
    case types.API_V1_CUSTOMTEXT_READ:
    case types.API_V1_CUSTOMTEXT_READ_SUCCEEDED:
      return Object.assign({}, state, {
        customTexts: [
          ...state.customTexts.filter(
            record => record.id !== action.response.id
          ),
          action.response
        ]
      })
    case types.API_V1_CUSTOMTEXT_READ_FAILED:
      return Object.assign({}, state, {
        crowdboticstestAPI: [...state.crowdboticstestAPI, action.response]
      })
    case types.API_V1_CUSTOMTEXT_UPDATE:
    case types.API_V1_CUSTOMTEXT_UPDATE_SUCCEEDED:
      return Object.assign({}, state, {
        customTexts: state.customTexts.map(record =>
          record.id === action.response.id ? action.response : record
        )
      })
    case types.API_V1_CUSTOMTEXT_UPDATE_FAILED:
      return Object.assign({}, state, {
        crowdboticstestAPI: [...state.crowdboticstestAPI, action.response]
      })
    case types.API_V1_CUSTOMTEXT_PARTIAL_UPDATE:
    case types.API_V1_CUSTOMTEXT_PARTIAL_UPDATE_SUCCEEDED:
      return Object.assign({}, state, {
        customTexts: state.customTexts.map(record =>
          record.id === action.response.id ? action.response : record
        )
      })
    case types.API_V1_CUSTOMTEXT_PARTIAL_UPDATE_FAILED:
      return Object.assign({}, state, {
        crowdboticstestAPI: [...state.crowdboticstestAPI, action.response]
      })
    case types.API_V1_FORWARDEDMESSAGE_LIST:
    case types.API_V1_FORWARDEDMESSAGE_LIST_SUCCEEDED:
      return Object.assign({}, state, {
        forwardedMessages: [...state.forwardedMessages, action.response]
      })
    case types.API_V1_FORWARDEDMESSAGE_LIST_FAILED:
      return Object.assign({}, state, {
        crowdboticstestAPI: [...state.crowdboticstestAPI, action.response]
      })
    case types.API_V1_FORWARDEDMESSAGE_CREATE:
    case types.API_V1_FORWARDEDMESSAGE_CREATE_SUCCEEDED:
      return Object.assign({}, state, {
        forwardedMessages: [...state.forwardedMessages, action.response]
      })
    case types.API_V1_FORWARDEDMESSAGE_CREATE_FAILED:
      return Object.assign({}, state, {
        crowdboticstestAPI: [...state.crowdboticstestAPI, action.response]
      })
    case types.API_V1_FORWARDEDMESSAGE_READ:
    case types.API_V1_FORWARDEDMESSAGE_READ_SUCCEEDED:
      return Object.assign({}, state, {
        forwardedMessages: [
          ...state.forwardedMessages.filter(
            record => record.id !== action.response.id
          ),
          action.response
        ]
      })
    case types.API_V1_FORWARDEDMESSAGE_READ_FAILED:
      return Object.assign({}, state, {
        crowdboticstestAPI: [...state.crowdboticstestAPI, action.response]
      })
    case types.API_V1_FORWARDEDMESSAGE_UPDATE:
    case types.API_V1_FORWARDEDMESSAGE_UPDATE_SUCCEEDED:
      return Object.assign({}, state, {
        forwardedMessages: state.forwardedMessages.map(record =>
          record.id === action.response.id ? action.response : record
        )
      })
    case types.API_V1_FORWARDEDMESSAGE_UPDATE_FAILED:
      return Object.assign({}, state, {
        crowdboticstestAPI: [...state.crowdboticstestAPI, action.response]
      })
    case types.API_V1_FORWARDEDMESSAGE_PARTIAL_UPDATE:
    case types.API_V1_FORWARDEDMESSAGE_PARTIAL_UPDATE_SUCCEEDED:
      return Object.assign({}, state, {
        forwardedMessages: state.forwardedMessages.map(record =>
          record.id === action.response.id ? action.response : record
        )
      })
    case types.API_V1_FORWARDEDMESSAGE_PARTIAL_UPDATE_FAILED:
      return Object.assign({}, state, {
        crowdboticstestAPI: [...state.crowdboticstestAPI, action.response]
      })
    case types.API_V1_FORWARDEDMESSAGE_DELETE:
    case types.API_V1_FORWARDEDMESSAGE_DELETE_SUCCEEDED:
    case types.API_V1_FORWARDEDMESSAGE_DELETE_FAILED:
      return Object.assign({}, state, {
        crowdboticstestAPI: [...state.crowdboticstestAPI, action.response]
      })
    case types.API_V1_HOMEPAGE_LIST:
    case types.API_V1_HOMEPAGE_LIST_SUCCEEDED:
      return Object.assign({}, state, {
        homePages: [...state.homePages, action.response]
      })
    case types.API_V1_HOMEPAGE_LIST_FAILED:
      return Object.assign({}, state, {
        crowdboticstestAPI: [...state.crowdboticstestAPI, action.response]
      })
    case types.API_V1_HOMEPAGE_READ:
    case types.API_V1_HOMEPAGE_READ_SUCCEEDED:
      return Object.assign({}, state, {
        homePages: [
          ...state.homePages.filter(record => record.id !== action.response.id),
          action.response
        ]
      })
    case types.API_V1_HOMEPAGE_READ_FAILED:
      return Object.assign({}, state, {
        crowdboticstestAPI: [...state.crowdboticstestAPI, action.response]
      })
    case types.API_V1_HOMEPAGE_UPDATE:
    case types.API_V1_HOMEPAGE_UPDATE_SUCCEEDED:
      return Object.assign({}, state, {
        homePages: state.homePages.map(record =>
          record.id === action.response.id ? action.response : record
        )
      })
    case types.API_V1_HOMEPAGE_UPDATE_FAILED:
      return Object.assign({}, state, {
        crowdboticstestAPI: [...state.crowdboticstestAPI, action.response]
      })
    case types.API_V1_HOMEPAGE_PARTIAL_UPDATE:
    case types.API_V1_HOMEPAGE_PARTIAL_UPDATE_SUCCEEDED:
      return Object.assign({}, state, {
        homePages: state.homePages.map(record =>
          record.id === action.response.id ? action.response : record
        )
      })
    case types.API_V1_HOMEPAGE_PARTIAL_UPDATE_FAILED:
      return Object.assign({}, state, {
        crowdboticstestAPI: [...state.crowdboticstestAPI, action.response]
      })
    case types.API_V1_LOGIN_CREATE:
    case types.API_V1_LOGIN_CREATE_SUCCEEDED:
    case types.API_V1_LOGIN_CREATE_FAILED:
      return Object.assign({}, state, {
        crowdboticstestAPI: [...state.crowdboticstestAPI, action.response]
      })
    case types.API_V1_MESSAGE_LIST:
    case types.API_V1_MESSAGE_LIST_SUCCEEDED:
      return Object.assign({}, state, {
        messages: [...state.messages, action.response]
      })
    case types.API_V1_MESSAGE_LIST_FAILED:
      return Object.assign({}, state, {
        crowdboticstestAPI: [...state.crowdboticstestAPI, action.response]
      })
    case types.API_V1_MESSAGE_CREATE:
    case types.API_V1_MESSAGE_CREATE_SUCCEEDED:
      return Object.assign({}, state, {
        messages: [...state.messages, action.response]
      })
    case types.API_V1_MESSAGE_CREATE_FAILED:
      return Object.assign({}, state, {
        crowdboticstestAPI: [...state.crowdboticstestAPI, action.response]
      })
    case types.API_V1_MESSAGE_READ:
    case types.API_V1_MESSAGE_READ_SUCCEEDED:
      return Object.assign({}, state, {
        messages: [
          ...state.messages.filter(record => record.id !== action.response.id),
          action.response
        ]
      })
    case types.API_V1_MESSAGE_READ_FAILED:
      return Object.assign({}, state, {
        crowdboticstestAPI: [...state.crowdboticstestAPI, action.response]
      })
    case types.API_V1_MESSAGE_UPDATE:
    case types.API_V1_MESSAGE_UPDATE_SUCCEEDED:
      return Object.assign({}, state, {
        messages: state.messages.map(record =>
          record.id === action.response.id ? action.response : record
        )
      })
    case types.API_V1_MESSAGE_UPDATE_FAILED:
      return Object.assign({}, state, {
        crowdboticstestAPI: [...state.crowdboticstestAPI, action.response]
      })
    case types.API_V1_MESSAGE_PARTIAL_UPDATE:
    case types.API_V1_MESSAGE_PARTIAL_UPDATE_SUCCEEDED:
      return Object.assign({}, state, {
        messages: state.messages.map(record =>
          record.id === action.response.id ? action.response : record
        )
      })
    case types.API_V1_MESSAGE_PARTIAL_UPDATE_FAILED:
      return Object.assign({}, state, {
        crowdboticstestAPI: [...state.crowdboticstestAPI, action.response]
      })
    case types.API_V1_MESSAGE_DELETE:
    case types.API_V1_MESSAGE_DELETE_SUCCEEDED:
    case types.API_V1_MESSAGE_DELETE_FAILED:
      return Object.assign({}, state, {
        crowdboticstestAPI: [...state.crowdboticstestAPI, action.response]
      })
    case types.API_V1_MESSAGEACTION_LIST:
    case types.API_V1_MESSAGEACTION_LIST_SUCCEEDED:
      return Object.assign({}, state, {
        messageActions: [...state.messageActions, action.response]
      })
    case types.API_V1_MESSAGEACTION_LIST_FAILED:
      return Object.assign({}, state, {
        crowdboticstestAPI: [...state.crowdboticstestAPI, action.response]
      })
    case types.API_V1_MESSAGEACTION_CREATE:
    case types.API_V1_MESSAGEACTION_CREATE_SUCCEEDED:
      return Object.assign({}, state, {
        messageActions: [...state.messageActions, action.response]
      })
    case types.API_V1_MESSAGEACTION_CREATE_FAILED:
      return Object.assign({}, state, {
        crowdboticstestAPI: [...state.crowdboticstestAPI, action.response]
      })
    case types.API_V1_MESSAGEACTION_READ:
    case types.API_V1_MESSAGEACTION_READ_SUCCEEDED:
      return Object.assign({}, state, {
        messageActions: [
          ...state.messageActions.filter(
            record => record.id !== action.response.id
          ),
          action.response
        ]
      })
    case types.API_V1_MESSAGEACTION_READ_FAILED:
      return Object.assign({}, state, {
        crowdboticstestAPI: [...state.crowdboticstestAPI, action.response]
      })
    case types.API_V1_MESSAGEACTION_UPDATE:
    case types.API_V1_MESSAGEACTION_UPDATE_SUCCEEDED:
      return Object.assign({}, state, {
        messageActions: state.messageActions.map(record =>
          record.id === action.response.id ? action.response : record
        )
      })
    case types.API_V1_MESSAGEACTION_UPDATE_FAILED:
      return Object.assign({}, state, {
        crowdboticstestAPI: [...state.crowdboticstestAPI, action.response]
      })
    case types.API_V1_MESSAGEACTION_PARTIAL_UPDATE:
    case types.API_V1_MESSAGEACTION_PARTIAL_UPDATE_SUCCEEDED:
      return Object.assign({}, state, {
        messageActions: state.messageActions.map(record =>
          record.id === action.response.id ? action.response : record
        )
      })
    case types.API_V1_MESSAGEACTION_PARTIAL_UPDATE_FAILED:
      return Object.assign({}, state, {
        crowdboticstestAPI: [...state.crowdboticstestAPI, action.response]
      })
    case types.API_V1_MESSAGEACTION_DELETE:
    case types.API_V1_MESSAGEACTION_DELETE_SUCCEEDED:
    case types.API_V1_MESSAGEACTION_DELETE_FAILED:
      return Object.assign({}, state, {
        crowdboticstestAPI: [...state.crowdboticstestAPI, action.response]
      })
    case types.API_V1_PROFILE_LIST:
    case types.API_V1_PROFILE_LIST_SUCCEEDED:
      return Object.assign({}, state, {
        profiles: [...state.profiles, action.response]
      })
    case types.API_V1_PROFILE_LIST_FAILED:
      return Object.assign({}, state, {
        crowdboticstestAPI: [...state.crowdboticstestAPI, action.response]
      })
    case types.API_V1_PROFILE_CREATE:
    case types.API_V1_PROFILE_CREATE_SUCCEEDED:
      return Object.assign({}, state, {
        profiles: [...state.profiles, action.response]
      })
    case types.API_V1_PROFILE_CREATE_FAILED:
      return Object.assign({}, state, {
        crowdboticstestAPI: [...state.crowdboticstestAPI, action.response]
      })
    case types.API_V1_PROFILE_READ:
    case types.API_V1_PROFILE_READ_SUCCEEDED:
      return Object.assign({}, state, {
        profiles: [
          ...state.profiles.filter(record => record.id !== action.response.id),
          action.response
        ]
      })
    case types.API_V1_PROFILE_READ_FAILED:
      return Object.assign({}, state, {
        crowdboticstestAPI: [...state.crowdboticstestAPI, action.response]
      })
    case types.API_V1_PROFILE_UPDATE:
    case types.API_V1_PROFILE_UPDATE_SUCCEEDED:
      return Object.assign({}, state, {
        profiles: state.profiles.map(record =>
          record.id === action.response.id ? action.response : record
        )
      })
    case types.API_V1_PROFILE_UPDATE_FAILED:
      return Object.assign({}, state, {
        crowdboticstestAPI: [...state.crowdboticstestAPI, action.response]
      })
    case types.API_V1_PROFILE_PARTIAL_UPDATE:
    case types.API_V1_PROFILE_PARTIAL_UPDATE_SUCCEEDED:
      return Object.assign({}, state, {
        profiles: state.profiles.map(record =>
          record.id === action.response.id ? action.response : record
        )
      })
    case types.API_V1_PROFILE_PARTIAL_UPDATE_FAILED:
      return Object.assign({}, state, {
        crowdboticstestAPI: [...state.crowdboticstestAPI, action.response]
      })
    case types.API_V1_PROFILE_DELETE:
    case types.API_V1_PROFILE_DELETE_SUCCEEDED:
    case types.API_V1_PROFILE_DELETE_FAILED:
      return Object.assign({}, state, {
        crowdboticstestAPI: [...state.crowdboticstestAPI, action.response]
      })
    case types.API_V1_SIGNUP_CREATE:
    case types.API_V1_SIGNUP_CREATE_SUCCEEDED:
      return Object.assign({}, state, {
        signups: [...state.signups, action.response]
      })
    case types.API_V1_SIGNUP_CREATE_FAILED:
      return Object.assign({}, state, {
        crowdboticstestAPI: [...state.crowdboticstestAPI, action.response]
      })
    case types.API_V1_THREAD_LIST:
    case types.API_V1_THREAD_LIST_SUCCEEDED:
      return Object.assign({}, state, {
        threads: [...state.threads, action.response]
      })
    case types.API_V1_THREAD_LIST_FAILED:
      return Object.assign({}, state, {
        crowdboticstestAPI: [...state.crowdboticstestAPI, action.response]
      })
    case types.API_V1_THREAD_CREATE:
    case types.API_V1_THREAD_CREATE_SUCCEEDED:
      return Object.assign({}, state, {
        threads: [...state.threads, action.response]
      })
    case types.API_V1_THREAD_CREATE_FAILED:
      return Object.assign({}, state, {
        crowdboticstestAPI: [...state.crowdboticstestAPI, action.response]
      })
    case types.API_V1_THREAD_READ:
    case types.API_V1_THREAD_READ_SUCCEEDED:
      return Object.assign({}, state, {
        threads: [
          ...state.threads.filter(record => record.id !== action.response.id),
          action.response
        ]
      })
    case types.API_V1_THREAD_READ_FAILED:
      return Object.assign({}, state, {
        crowdboticstestAPI: [...state.crowdboticstestAPI, action.response]
      })
    case types.API_V1_THREAD_UPDATE:
    case types.API_V1_THREAD_UPDATE_SUCCEEDED:
      return Object.assign({}, state, {
        threads: state.threads.map(record =>
          record.id === action.response.id ? action.response : record
        )
      })
    case types.API_V1_THREAD_UPDATE_FAILED:
      return Object.assign({}, state, {
        crowdboticstestAPI: [...state.crowdboticstestAPI, action.response]
      })
    case types.API_V1_THREAD_PARTIAL_UPDATE:
    case types.API_V1_THREAD_PARTIAL_UPDATE_SUCCEEDED:
      return Object.assign({}, state, {
        threads: state.threads.map(record =>
          record.id === action.response.id ? action.response : record
        )
      })
    case types.API_V1_THREAD_PARTIAL_UPDATE_FAILED:
      return Object.assign({}, state, {
        crowdboticstestAPI: [...state.crowdboticstestAPI, action.response]
      })
    case types.API_V1_THREAD_DELETE:
    case types.API_V1_THREAD_DELETE_SUCCEEDED:
    case types.API_V1_THREAD_DELETE_FAILED:
      return Object.assign({}, state, {
        crowdboticstestAPI: [...state.crowdboticstestAPI, action.response]
      })
    case types.API_V1_THREADACTION_LIST:
    case types.API_V1_THREADACTION_LIST_SUCCEEDED:
      return Object.assign({}, state, {
        threadActions: [...state.threadActions, action.response]
      })
    case types.API_V1_THREADACTION_LIST_FAILED:
      return Object.assign({}, state, {
        crowdboticstestAPI: [...state.crowdboticstestAPI, action.response]
      })
    case types.API_V1_THREADACTION_CREATE:
    case types.API_V1_THREADACTION_CREATE_SUCCEEDED:
      return Object.assign({}, state, {
        threadActions: [...state.threadActions, action.response]
      })
    case types.API_V1_THREADACTION_CREATE_FAILED:
      return Object.assign({}, state, {
        crowdboticstestAPI: [...state.crowdboticstestAPI, action.response]
      })
    case types.API_V1_THREADACTION_READ:
    case types.API_V1_THREADACTION_READ_SUCCEEDED:
      return Object.assign({}, state, {
        threadActions: [
          ...state.threadActions.filter(
            record => record.id !== action.response.id
          ),
          action.response
        ]
      })
    case types.API_V1_THREADACTION_READ_FAILED:
      return Object.assign({}, state, {
        crowdboticstestAPI: [...state.crowdboticstestAPI, action.response]
      })
    case types.API_V1_THREADACTION_UPDATE:
    case types.API_V1_THREADACTION_UPDATE_SUCCEEDED:
      return Object.assign({}, state, {
        threadActions: state.threadActions.map(record =>
          record.id === action.response.id ? action.response : record
        )
      })
    case types.API_V1_THREADACTION_UPDATE_FAILED:
      return Object.assign({}, state, {
        crowdboticstestAPI: [...state.crowdboticstestAPI, action.response]
      })
    case types.API_V1_THREADACTION_PARTIAL_UPDATE:
    case types.API_V1_THREADACTION_PARTIAL_UPDATE_SUCCEEDED:
      return Object.assign({}, state, {
        threadActions: state.threadActions.map(record =>
          record.id === action.response.id ? action.response : record
        )
      })
    case types.API_V1_THREADACTION_PARTIAL_UPDATE_FAILED:
      return Object.assign({}, state, {
        crowdboticstestAPI: [...state.crowdboticstestAPI, action.response]
      })
    case types.API_V1_THREADACTION_DELETE:
    case types.API_V1_THREADACTION_DELETE_SUCCEEDED:
    case types.API_V1_THREADACTION_DELETE_FAILED:
      return Object.assign({}, state, {
        crowdboticstestAPI: [...state.crowdboticstestAPI, action.response]
      })
    case types.API_V1_THREADMEMBER_LIST:
    case types.API_V1_THREADMEMBER_LIST_SUCCEEDED:
      return Object.assign({}, state, {
        threadMembers: [...state.threadMembers, action.response]
      })
    case types.API_V1_THREADMEMBER_LIST_FAILED:
      return Object.assign({}, state, {
        crowdboticstestAPI: [...state.crowdboticstestAPI, action.response]
      })
    case types.API_V1_THREADMEMBER_CREATE:
    case types.API_V1_THREADMEMBER_CREATE_SUCCEEDED:
      return Object.assign({}, state, {
        threadMembers: [...state.threadMembers, action.response]
      })
    case types.API_V1_THREADMEMBER_CREATE_FAILED:
      return Object.assign({}, state, {
        crowdboticstestAPI: [...state.crowdboticstestAPI, action.response]
      })
    case types.API_V1_THREADMEMBER_READ:
    case types.API_V1_THREADMEMBER_READ_SUCCEEDED:
      return Object.assign({}, state, {
        threadMembers: [
          ...state.threadMembers.filter(
            record => record.id !== action.response.id
          ),
          action.response
        ]
      })
    case types.API_V1_THREADMEMBER_READ_FAILED:
      return Object.assign({}, state, {
        crowdboticstestAPI: [...state.crowdboticstestAPI, action.response]
      })
    case types.API_V1_THREADMEMBER_UPDATE:
    case types.API_V1_THREADMEMBER_UPDATE_SUCCEEDED:
      return Object.assign({}, state, {
        threadMembers: state.threadMembers.map(record =>
          record.id === action.response.id ? action.response : record
        )
      })
    case types.API_V1_THREADMEMBER_UPDATE_FAILED:
      return Object.assign({}, state, {
        crowdboticstestAPI: [...state.crowdboticstestAPI, action.response]
      })
    case types.API_V1_THREADMEMBER_PARTIAL_UPDATE:
    case types.API_V1_THREADMEMBER_PARTIAL_UPDATE_SUCCEEDED:
      return Object.assign({}, state, {
        threadMembers: state.threadMembers.map(record =>
          record.id === action.response.id ? action.response : record
        )
      })
    case types.API_V1_THREADMEMBER_PARTIAL_UPDATE_FAILED:
      return Object.assign({}, state, {
        crowdboticstestAPI: [...state.crowdboticstestAPI, action.response]
      })
    case types.API_V1_THREADMEMBER_DELETE:
    case types.API_V1_THREADMEMBER_DELETE_SUCCEEDED:
    case types.API_V1_THREADMEMBER_DELETE_FAILED:
      return Object.assign({}, state, {
        crowdboticstestAPI: [...state.crowdboticstestAPI, action.response]
      })
    case types.API_V1_USER_LIST:
    case types.API_V1_USER_LIST_SUCCEEDED:
      return Object.assign({}, state, {
        users: [...state.users, action.response]
      })
    case types.API_V1_USER_LIST_FAILED:
      return Object.assign({}, state, {
        crowdboticstestAPI: [...state.crowdboticstestAPI, action.response]
      })
    case types.API_V1_USER_CREATE:
    case types.API_V1_USER_CREATE_SUCCEEDED:
      return Object.assign({}, state, {
        users: [...state.users, action.response]
      })
    case types.API_V1_USER_CREATE_FAILED:
      return Object.assign({}, state, {
        crowdboticstestAPI: [...state.crowdboticstestAPI, action.response]
      })
    case types.API_V1_USER_READ:
    case types.API_V1_USER_READ_SUCCEEDED:
      return Object.assign({}, state, {
        users: [
          ...state.users.filter(record => record.id !== action.response.id),
          action.response
        ]
      })
    case types.API_V1_USER_READ_FAILED:
      return Object.assign({}, state, {
        crowdboticstestAPI: [...state.crowdboticstestAPI, action.response]
      })
    case types.API_V1_USER_UPDATE:
    case types.API_V1_USER_UPDATE_SUCCEEDED:
      return Object.assign({}, state, {
        users: state.users.map(record =>
          record.id === action.response.id ? action.response : record
        )
      })
    case types.API_V1_USER_UPDATE_FAILED:
      return Object.assign({}, state, {
        crowdboticstestAPI: [...state.crowdboticstestAPI, action.response]
      })
    case types.API_V1_USER_PARTIAL_UPDATE:
    case types.API_V1_USER_PARTIAL_UPDATE_SUCCEEDED:
      return Object.assign({}, state, {
        users: state.users.map(record =>
          record.id === action.response.id ? action.response : record
        )
      })
    case types.API_V1_USER_PARTIAL_UPDATE_FAILED:
      return Object.assign({}, state, {
        crowdboticstestAPI: [...state.crowdboticstestAPI, action.response]
      })
    case types.API_V1_USER_DELETE:
    case types.API_V1_USER_DELETE_SUCCEEDED:
    case types.API_V1_USER_DELETE_FAILED:
      return Object.assign({}, state, {
        crowdboticstestAPI: [...state.crowdboticstestAPI, action.response]
      })
    case types.API_V1_VERIFICATIONCODE_LIST:
    case types.API_V1_VERIFICATIONCODE_LIST_SUCCEEDED:
      return Object.assign({}, state, {
        verificationCodes: [...state.verificationCodes, action.response]
      })
    case types.API_V1_VERIFICATIONCODE_LIST_FAILED:
      return Object.assign({}, state, {
        crowdboticstestAPI: [...state.crowdboticstestAPI, action.response]
      })
    case types.API_V1_VERIFICATIONCODE_CREATE:
    case types.API_V1_VERIFICATIONCODE_CREATE_SUCCEEDED:
      return Object.assign({}, state, {
        verificationCodes: [...state.verificationCodes, action.response]
      })
    case types.API_V1_VERIFICATIONCODE_CREATE_FAILED:
      return Object.assign({}, state, {
        crowdboticstestAPI: [...state.crowdboticstestAPI, action.response]
      })
    case types.API_V1_VERIFICATIONCODE_READ:
    case types.API_V1_VERIFICATIONCODE_READ_SUCCEEDED:
      return Object.assign({}, state, {
        verificationCodes: [
          ...state.verificationCodes.filter(
            record => record.id !== action.response.id
          ),
          action.response
        ]
      })
    case types.API_V1_VERIFICATIONCODE_READ_FAILED:
      return Object.assign({}, state, {
        crowdboticstestAPI: [...state.crowdboticstestAPI, action.response]
      })
    case types.API_V1_VERIFICATIONCODE_UPDATE:
    case types.API_V1_VERIFICATIONCODE_UPDATE_SUCCEEDED:
      return Object.assign({}, state, {
        verificationCodes: state.verificationCodes.map(record =>
          record.id === action.response.id ? action.response : record
        )
      })
    case types.API_V1_VERIFICATIONCODE_UPDATE_FAILED:
      return Object.assign({}, state, {
        crowdboticstestAPI: [...state.crowdboticstestAPI, action.response]
      })
    case types.API_V1_VERIFICATIONCODE_PARTIAL_UPDATE:
    case types.API_V1_VERIFICATIONCODE_PARTIAL_UPDATE_SUCCEEDED:
      return Object.assign({}, state, {
        verificationCodes: state.verificationCodes.map(record =>
          record.id === action.response.id ? action.response : record
        )
      })
    case types.API_V1_VERIFICATIONCODE_PARTIAL_UPDATE_FAILED:
      return Object.assign({}, state, {
        crowdboticstestAPI: [...state.crowdboticstestAPI, action.response]
      })
    case types.API_V1_VERIFICATIONCODE_DELETE:
    case types.API_V1_VERIFICATIONCODE_DELETE_SUCCEEDED:
    case types.API_V1_VERIFICATIONCODE_DELETE_FAILED:
      return Object.assign({}, state, {
        crowdboticstestAPI: [...state.crowdboticstestAPI, action.response]
      })
    case types.REST_AUTH_LOGIN_CREATE:
    case types.REST_AUTH_LOGIN_CREATE_SUCCEEDED:
      return Object.assign({}, state, {
        logins: [...state.logins, action.response]
      })
    case types.REST_AUTH_LOGIN_CREATE_FAILED:
      return Object.assign({}, state, {
        crowdboticstestAPI: [...state.crowdboticstestAPI, action.response]
      })
    case types.REST_AUTH_LOGOUT_LIST:
    case types.REST_AUTH_LOGOUT_LIST_SUCCEEDED:
    case types.REST_AUTH_LOGOUT_LIST_FAILED:
      return Object.assign({}, state, {
        crowdboticstestAPI: [...state.crowdboticstestAPI, action.response]
      })
    case types.REST_AUTH_LOGOUT_CREATE:
    case types.REST_AUTH_LOGOUT_CREATE_SUCCEEDED:
    case types.REST_AUTH_LOGOUT_CREATE_FAILED:
      return Object.assign({}, state, {
        crowdboticstestAPI: [...state.crowdboticstestAPI, action.response]
      })
    case types.REST_AUTH_PASSWORD_CHANGE_CREATE:
    case types.REST_AUTH_PASSWORD_CHANGE_CREATE_SUCCEEDED:
      return Object.assign({}, state, {
        passwordChanges: [...state.passwordChanges, action.response]
      })
    case types.REST_AUTH_PASSWORD_CHANGE_CREATE_FAILED:
      return Object.assign({}, state, {
        crowdboticstestAPI: [...state.crowdboticstestAPI, action.response]
      })
    case types.REST_AUTH_PASSWORD_RESET_CREATE:
    case types.REST_AUTH_PASSWORD_RESET_CREATE_SUCCEEDED:
      return Object.assign({}, state, {
        passwords: [...state.passwords, action.response]
      })
    case types.REST_AUTH_PASSWORD_RESET_CREATE_FAILED:
      return Object.assign({}, state, {
        crowdboticstestAPI: [...state.crowdboticstestAPI, action.response]
      })
    case types.REST_AUTH_PASSWORD_RESET_CONFIRM_CREATE:
    case types.REST_AUTH_PASSWORD_RESET_CONFIRM_CREATE_SUCCEEDED:
      return Object.assign({}, state, {
        passwordResetConfirms: [...state.passwordResetConfirms, action.response]
      })
    case types.REST_AUTH_PASSWORD_RESET_CONFIRM_CREATE_FAILED:
      return Object.assign({}, state, {
        crowdboticstestAPI: [...state.crowdboticstestAPI, action.response]
      })
    case types.REST_AUTH_REGISTRATION_CREATE:
    case types.REST_AUTH_REGISTRATION_CREATE_SUCCEEDED:
      return Object.assign({}, state, {
        signups: [...state.signups, action.response]
      })
    case types.REST_AUTH_REGISTRATION_CREATE_FAILED:
      return Object.assign({}, state, {
        crowdboticstestAPI: [...state.crowdboticstestAPI, action.response]
      })
    case types.REST_AUTH_REGISTRATION_VERIFY_EMAIL_CREATE:
    case types.REST_AUTH_REGISTRATION_VERIFY_EMAIL_CREATE_SUCCEEDED:
      return Object.assign({}, state, {
        verifyEmails: [...state.verifyEmails, action.response]
      })
    case types.REST_AUTH_REGISTRATION_VERIFY_EMAIL_CREATE_FAILED:
      return Object.assign({}, state, {
        crowdboticstestAPI: [...state.crowdboticstestAPI, action.response]
      })
    case types.REST_AUTH_USER_READ:
    case types.REST_AUTH_USER_READ_SUCCEEDED:
      return Object.assign({}, state, {
        userDetails: [
          ...state.userDetails.filter(
            record => record.id !== action.response.id
          ),
          action.response
        ]
      })
    case types.REST_AUTH_USER_READ_FAILED:
      return Object.assign({}, state, {
        crowdboticstestAPI: [...state.crowdboticstestAPI, action.response]
      })
    case types.REST_AUTH_USER_UPDATE:
    case types.REST_AUTH_USER_UPDATE_SUCCEEDED:
      return Object.assign({}, state, {
        userDetails: state.userDetails.map(record =>
          record.id === action.response.id ? action.response : record
        )
      })
    case types.REST_AUTH_USER_UPDATE_FAILED:
      return Object.assign({}, state, {
        crowdboticstestAPI: [...state.crowdboticstestAPI, action.response]
      })
    case types.REST_AUTH_USER_PARTIAL_UPDATE:
    case types.REST_AUTH_USER_PARTIAL_UPDATE_SUCCEEDED:
      return Object.assign({}, state, {
        userDetails: state.userDetails.map(record =>
          record.id === action.response.id ? action.response : record
        )
      })
    case types.REST_AUTH_USER_PARTIAL_UPDATE_FAILED:
      return Object.assign({}, state, {
        crowdboticstestAPI: [...state.crowdboticstestAPI, action.response]
      })
    default:
      return state
  }
}
