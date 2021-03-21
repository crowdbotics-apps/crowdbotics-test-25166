import * as types from "./constants"
export const api_v1_contact_list = () => ({ type: types.API_V1_CONTACT_LIST })
export const api_v1_contact_listSucceeded = (response, starter) => ({
  type: types.API_V1_CONTACT_LIST_SUCCEEDED,
  response,
  starter
})
export const api_v1_contact_listFailed = (response, starter) => ({
  type: types.API_V1_CONTACT_LIST_FAILED,
  response,
  starter
})
export const api_v1_contact_create = data => ({
  type: types.API_V1_CONTACT_CREATE,
  data
})
export const api_v1_contact_createSucceeded = (response, starter) => ({
  type: types.API_V1_CONTACT_CREATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_contact_createFailed = (response, starter) => ({
  type: types.API_V1_CONTACT_CREATE_FAILED,
  response,
  starter
})
export const api_v1_contact_read = () => ({ type: types.API_V1_CONTACT_READ })
export const api_v1_contact_readSucceeded = (response, starter) => ({
  type: types.API_V1_CONTACT_READ_SUCCEEDED,
  response,
  starter
})
export const api_v1_contact_readFailed = (response, starter) => ({
  type: types.API_V1_CONTACT_READ_FAILED,
  response,
  starter
})
export const api_v1_contact_update = data => ({
  type: types.API_V1_CONTACT_UPDATE,
  data
})
export const api_v1_contact_updateSucceeded = (response, starter) => ({
  type: types.API_V1_CONTACT_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_contact_updateFailed = (response, starter) => ({
  type: types.API_V1_CONTACT_UPDATE_FAILED,
  response,
  starter
})
export const api_v1_contact_partial_update = data => ({
  type: types.API_V1_CONTACT_PARTIAL_UPDATE,
  data
})
export const api_v1_contact_partial_updateSucceeded = (response, starter) => ({
  type: types.API_V1_CONTACT_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_contact_partial_updateFailed = (response, starter) => ({
  type: types.API_V1_CONTACT_PARTIAL_UPDATE_FAILED,
  response,
  starter
})
export const api_v1_contact_delete = () => ({
  type: types.API_V1_CONTACT_DELETE
})
export const api_v1_contact_deleteSucceeded = (response, starter) => ({
  type: types.API_V1_CONTACT_DELETE_SUCCEEDED,
  response,
  starter
})
export const api_v1_contact_deleteFailed = (response, starter) => ({
  type: types.API_V1_CONTACT_DELETE_FAILED,
  response,
  starter
})
export const api_v1_customtext_list = () => ({
  type: types.API_V1_CUSTOMTEXT_LIST
})
export const api_v1_customtext_listSucceeded = (response, starter) => ({
  type: types.API_V1_CUSTOMTEXT_LIST_SUCCEEDED,
  response,
  starter
})
export const api_v1_customtext_listFailed = (response, starter) => ({
  type: types.API_V1_CUSTOMTEXT_LIST_FAILED,
  response,
  starter
})
export const api_v1_customtext_read = () => ({
  type: types.API_V1_CUSTOMTEXT_READ
})
export const api_v1_customtext_readSucceeded = (response, starter) => ({
  type: types.API_V1_CUSTOMTEXT_READ_SUCCEEDED,
  response,
  starter
})
export const api_v1_customtext_readFailed = (response, starter) => ({
  type: types.API_V1_CUSTOMTEXT_READ_FAILED,
  response,
  starter
})
export const api_v1_customtext_update = data => ({
  type: types.API_V1_CUSTOMTEXT_UPDATE,
  data
})
export const api_v1_customtext_updateSucceeded = (response, starter) => ({
  type: types.API_V1_CUSTOMTEXT_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_customtext_updateFailed = (response, starter) => ({
  type: types.API_V1_CUSTOMTEXT_UPDATE_FAILED,
  response,
  starter
})
export const api_v1_customtext_partial_update = data => ({
  type: types.API_V1_CUSTOMTEXT_PARTIAL_UPDATE,
  data
})
export const api_v1_customtext_partial_updateSucceeded = (
  response,
  starter
) => ({
  type: types.API_V1_CUSTOMTEXT_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_customtext_partial_updateFailed = (response, starter) => ({
  type: types.API_V1_CUSTOMTEXT_PARTIAL_UPDATE_FAILED,
  response,
  starter
})
export const api_v1_forwardedmessage_list = () => ({
  type: types.API_V1_FORWARDEDMESSAGE_LIST
})
export const api_v1_forwardedmessage_listSucceeded = (response, starter) => ({
  type: types.API_V1_FORWARDEDMESSAGE_LIST_SUCCEEDED,
  response,
  starter
})
export const api_v1_forwardedmessage_listFailed = (response, starter) => ({
  type: types.API_V1_FORWARDEDMESSAGE_LIST_FAILED,
  response,
  starter
})
export const api_v1_forwardedmessage_create = data => ({
  type: types.API_V1_FORWARDEDMESSAGE_CREATE,
  data
})
export const api_v1_forwardedmessage_createSucceeded = (response, starter) => ({
  type: types.API_V1_FORWARDEDMESSAGE_CREATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_forwardedmessage_createFailed = (response, starter) => ({
  type: types.API_V1_FORWARDEDMESSAGE_CREATE_FAILED,
  response,
  starter
})
export const api_v1_forwardedmessage_read = () => ({
  type: types.API_V1_FORWARDEDMESSAGE_READ
})
export const api_v1_forwardedmessage_readSucceeded = (response, starter) => ({
  type: types.API_V1_FORWARDEDMESSAGE_READ_SUCCEEDED,
  response,
  starter
})
export const api_v1_forwardedmessage_readFailed = (response, starter) => ({
  type: types.API_V1_FORWARDEDMESSAGE_READ_FAILED,
  response,
  starter
})
export const api_v1_forwardedmessage_update = data => ({
  type: types.API_V1_FORWARDEDMESSAGE_UPDATE,
  data
})
export const api_v1_forwardedmessage_updateSucceeded = (response, starter) => ({
  type: types.API_V1_FORWARDEDMESSAGE_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_forwardedmessage_updateFailed = (response, starter) => ({
  type: types.API_V1_FORWARDEDMESSAGE_UPDATE_FAILED,
  response,
  starter
})
export const api_v1_forwardedmessage_partial_update = data => ({
  type: types.API_V1_FORWARDEDMESSAGE_PARTIAL_UPDATE,
  data
})
export const api_v1_forwardedmessage_partial_updateSucceeded = (
  response,
  starter
) => ({
  type: types.API_V1_FORWARDEDMESSAGE_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_forwardedmessage_partial_updateFailed = (
  response,
  starter
) => ({
  type: types.API_V1_FORWARDEDMESSAGE_PARTIAL_UPDATE_FAILED,
  response,
  starter
})
export const api_v1_forwardedmessage_delete = () => ({
  type: types.API_V1_FORWARDEDMESSAGE_DELETE
})
export const api_v1_forwardedmessage_deleteSucceeded = (response, starter) => ({
  type: types.API_V1_FORWARDEDMESSAGE_DELETE_SUCCEEDED,
  response,
  starter
})
export const api_v1_forwardedmessage_deleteFailed = (response, starter) => ({
  type: types.API_V1_FORWARDEDMESSAGE_DELETE_FAILED,
  response,
  starter
})
export const api_v1_homepage_list = () => ({ type: types.API_V1_HOMEPAGE_LIST })
export const api_v1_homepage_listSucceeded = (response, starter) => ({
  type: types.API_V1_HOMEPAGE_LIST_SUCCEEDED,
  response,
  starter
})
export const api_v1_homepage_listFailed = (response, starter) => ({
  type: types.API_V1_HOMEPAGE_LIST_FAILED,
  response,
  starter
})
export const api_v1_homepage_read = () => ({ type: types.API_V1_HOMEPAGE_READ })
export const api_v1_homepage_readSucceeded = (response, starter) => ({
  type: types.API_V1_HOMEPAGE_READ_SUCCEEDED,
  response,
  starter
})
export const api_v1_homepage_readFailed = (response, starter) => ({
  type: types.API_V1_HOMEPAGE_READ_FAILED,
  response,
  starter
})
export const api_v1_homepage_update = data => ({
  type: types.API_V1_HOMEPAGE_UPDATE,
  data
})
export const api_v1_homepage_updateSucceeded = (response, starter) => ({
  type: types.API_V1_HOMEPAGE_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_homepage_updateFailed = (response, starter) => ({
  type: types.API_V1_HOMEPAGE_UPDATE_FAILED,
  response,
  starter
})
export const api_v1_homepage_partial_update = data => ({
  type: types.API_V1_HOMEPAGE_PARTIAL_UPDATE,
  data
})
export const api_v1_homepage_partial_updateSucceeded = (response, starter) => ({
  type: types.API_V1_HOMEPAGE_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_homepage_partial_updateFailed = (response, starter) => ({
  type: types.API_V1_HOMEPAGE_PARTIAL_UPDATE_FAILED,
  response,
  starter
})
export const api_v1_login_create = () => ({ type: types.API_V1_LOGIN_CREATE })
export const api_v1_login_createSucceeded = (response, starter) => ({
  type: types.API_V1_LOGIN_CREATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_login_createFailed = (response, starter) => ({
  type: types.API_V1_LOGIN_CREATE_FAILED,
  response,
  starter
})
export const api_v1_message_list = () => ({ type: types.API_V1_MESSAGE_LIST })
export const api_v1_message_listSucceeded = (response, starter) => ({
  type: types.API_V1_MESSAGE_LIST_SUCCEEDED,
  response,
  starter
})
export const api_v1_message_listFailed = (response, starter) => ({
  type: types.API_V1_MESSAGE_LIST_FAILED,
  response,
  starter
})
export const api_v1_message_create = data => ({
  type: types.API_V1_MESSAGE_CREATE,
  data
})
export const api_v1_message_createSucceeded = (response, starter) => ({
  type: types.API_V1_MESSAGE_CREATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_message_createFailed = (response, starter) => ({
  type: types.API_V1_MESSAGE_CREATE_FAILED,
  response,
  starter
})
export const api_v1_message_read = () => ({ type: types.API_V1_MESSAGE_READ })
export const api_v1_message_readSucceeded = (response, starter) => ({
  type: types.API_V1_MESSAGE_READ_SUCCEEDED,
  response,
  starter
})
export const api_v1_message_readFailed = (response, starter) => ({
  type: types.API_V1_MESSAGE_READ_FAILED,
  response,
  starter
})
export const api_v1_message_update = data => ({
  type: types.API_V1_MESSAGE_UPDATE,
  data
})
export const api_v1_message_updateSucceeded = (response, starter) => ({
  type: types.API_V1_MESSAGE_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_message_updateFailed = (response, starter) => ({
  type: types.API_V1_MESSAGE_UPDATE_FAILED,
  response,
  starter
})
export const api_v1_message_partial_update = data => ({
  type: types.API_V1_MESSAGE_PARTIAL_UPDATE,
  data
})
export const api_v1_message_partial_updateSucceeded = (response, starter) => ({
  type: types.API_V1_MESSAGE_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_message_partial_updateFailed = (response, starter) => ({
  type: types.API_V1_MESSAGE_PARTIAL_UPDATE_FAILED,
  response,
  starter
})
export const api_v1_message_delete = () => ({
  type: types.API_V1_MESSAGE_DELETE
})
export const api_v1_message_deleteSucceeded = (response, starter) => ({
  type: types.API_V1_MESSAGE_DELETE_SUCCEEDED,
  response,
  starter
})
export const api_v1_message_deleteFailed = (response, starter) => ({
  type: types.API_V1_MESSAGE_DELETE_FAILED,
  response,
  starter
})
export const api_v1_messageaction_list = () => ({
  type: types.API_V1_MESSAGEACTION_LIST
})
export const api_v1_messageaction_listSucceeded = (response, starter) => ({
  type: types.API_V1_MESSAGEACTION_LIST_SUCCEEDED,
  response,
  starter
})
export const api_v1_messageaction_listFailed = (response, starter) => ({
  type: types.API_V1_MESSAGEACTION_LIST_FAILED,
  response,
  starter
})
export const api_v1_messageaction_create = data => ({
  type: types.API_V1_MESSAGEACTION_CREATE,
  data
})
export const api_v1_messageaction_createSucceeded = (response, starter) => ({
  type: types.API_V1_MESSAGEACTION_CREATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_messageaction_createFailed = (response, starter) => ({
  type: types.API_V1_MESSAGEACTION_CREATE_FAILED,
  response,
  starter
})
export const api_v1_messageaction_read = () => ({
  type: types.API_V1_MESSAGEACTION_READ
})
export const api_v1_messageaction_readSucceeded = (response, starter) => ({
  type: types.API_V1_MESSAGEACTION_READ_SUCCEEDED,
  response,
  starter
})
export const api_v1_messageaction_readFailed = (response, starter) => ({
  type: types.API_V1_MESSAGEACTION_READ_FAILED,
  response,
  starter
})
export const api_v1_messageaction_update = data => ({
  type: types.API_V1_MESSAGEACTION_UPDATE,
  data
})
export const api_v1_messageaction_updateSucceeded = (response, starter) => ({
  type: types.API_V1_MESSAGEACTION_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_messageaction_updateFailed = (response, starter) => ({
  type: types.API_V1_MESSAGEACTION_UPDATE_FAILED,
  response,
  starter
})
export const api_v1_messageaction_partial_update = data => ({
  type: types.API_V1_MESSAGEACTION_PARTIAL_UPDATE,
  data
})
export const api_v1_messageaction_partial_updateSucceeded = (
  response,
  starter
) => ({
  type: types.API_V1_MESSAGEACTION_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_messageaction_partial_updateFailed = (
  response,
  starter
) => ({
  type: types.API_V1_MESSAGEACTION_PARTIAL_UPDATE_FAILED,
  response,
  starter
})
export const api_v1_messageaction_delete = () => ({
  type: types.API_V1_MESSAGEACTION_DELETE
})
export const api_v1_messageaction_deleteSucceeded = (response, starter) => ({
  type: types.API_V1_MESSAGEACTION_DELETE_SUCCEEDED,
  response,
  starter
})
export const api_v1_messageaction_deleteFailed = (response, starter) => ({
  type: types.API_V1_MESSAGEACTION_DELETE_FAILED,
  response,
  starter
})
export const api_v1_profile_list = () => ({ type: types.API_V1_PROFILE_LIST })
export const api_v1_profile_listSucceeded = (response, starter) => ({
  type: types.API_V1_PROFILE_LIST_SUCCEEDED,
  response,
  starter
})
export const api_v1_profile_listFailed = (response, starter) => ({
  type: types.API_V1_PROFILE_LIST_FAILED,
  response,
  starter
})
export const api_v1_profile_create = data => ({
  type: types.API_V1_PROFILE_CREATE,
  data
})
export const api_v1_profile_createSucceeded = (response, starter) => ({
  type: types.API_V1_PROFILE_CREATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_profile_createFailed = (response, starter) => ({
  type: types.API_V1_PROFILE_CREATE_FAILED,
  response,
  starter
})
export const api_v1_profile_read = () => ({ type: types.API_V1_PROFILE_READ })
export const api_v1_profile_readSucceeded = (response, starter) => ({
  type: types.API_V1_PROFILE_READ_SUCCEEDED,
  response,
  starter
})
export const api_v1_profile_readFailed = (response, starter) => ({
  type: types.API_V1_PROFILE_READ_FAILED,
  response,
  starter
})
export const api_v1_profile_update = data => ({
  type: types.API_V1_PROFILE_UPDATE,
  data
})
export const api_v1_profile_updateSucceeded = (response, starter) => ({
  type: types.API_V1_PROFILE_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_profile_updateFailed = (response, starter) => ({
  type: types.API_V1_PROFILE_UPDATE_FAILED,
  response,
  starter
})
export const api_v1_profile_partial_update = data => ({
  type: types.API_V1_PROFILE_PARTIAL_UPDATE,
  data
})
export const api_v1_profile_partial_updateSucceeded = (response, starter) => ({
  type: types.API_V1_PROFILE_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_profile_partial_updateFailed = (response, starter) => ({
  type: types.API_V1_PROFILE_PARTIAL_UPDATE_FAILED,
  response,
  starter
})
export const api_v1_profile_delete = () => ({
  type: types.API_V1_PROFILE_DELETE
})
export const api_v1_profile_deleteSucceeded = (response, starter) => ({
  type: types.API_V1_PROFILE_DELETE_SUCCEEDED,
  response,
  starter
})
export const api_v1_profile_deleteFailed = (response, starter) => ({
  type: types.API_V1_PROFILE_DELETE_FAILED,
  response,
  starter
})
export const api_v1_signup_create = data => ({
  type: types.API_V1_SIGNUP_CREATE,
  data
})
export const api_v1_signup_createSucceeded = (response, starter) => ({
  type: types.API_V1_SIGNUP_CREATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_signup_createFailed = (response, starter) => ({
  type: types.API_V1_SIGNUP_CREATE_FAILED,
  response,
  starter
})
export const api_v1_thread_list = () => ({ type: types.API_V1_THREAD_LIST })
export const api_v1_thread_listSucceeded = (response, starter) => ({
  type: types.API_V1_THREAD_LIST_SUCCEEDED,
  response,
  starter
})
export const api_v1_thread_listFailed = (response, starter) => ({
  type: types.API_V1_THREAD_LIST_FAILED,
  response,
  starter
})
export const api_v1_thread_create = data => ({
  type: types.API_V1_THREAD_CREATE,
  data
})
export const api_v1_thread_createSucceeded = (response, starter) => ({
  type: types.API_V1_THREAD_CREATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_thread_createFailed = (response, starter) => ({
  type: types.API_V1_THREAD_CREATE_FAILED,
  response,
  starter
})
export const api_v1_thread_read = () => ({ type: types.API_V1_THREAD_READ })
export const api_v1_thread_readSucceeded = (response, starter) => ({
  type: types.API_V1_THREAD_READ_SUCCEEDED,
  response,
  starter
})
export const api_v1_thread_readFailed = (response, starter) => ({
  type: types.API_V1_THREAD_READ_FAILED,
  response,
  starter
})
export const api_v1_thread_update = data => ({
  type: types.API_V1_THREAD_UPDATE,
  data
})
export const api_v1_thread_updateSucceeded = (response, starter) => ({
  type: types.API_V1_THREAD_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_thread_updateFailed = (response, starter) => ({
  type: types.API_V1_THREAD_UPDATE_FAILED,
  response,
  starter
})
export const api_v1_thread_partial_update = data => ({
  type: types.API_V1_THREAD_PARTIAL_UPDATE,
  data
})
export const api_v1_thread_partial_updateSucceeded = (response, starter) => ({
  type: types.API_V1_THREAD_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_thread_partial_updateFailed = (response, starter) => ({
  type: types.API_V1_THREAD_PARTIAL_UPDATE_FAILED,
  response,
  starter
})
export const api_v1_thread_delete = () => ({ type: types.API_V1_THREAD_DELETE })
export const api_v1_thread_deleteSucceeded = (response, starter) => ({
  type: types.API_V1_THREAD_DELETE_SUCCEEDED,
  response,
  starter
})
export const api_v1_thread_deleteFailed = (response, starter) => ({
  type: types.API_V1_THREAD_DELETE_FAILED,
  response,
  starter
})
export const api_v1_threadaction_list = () => ({
  type: types.API_V1_THREADACTION_LIST
})
export const api_v1_threadaction_listSucceeded = (response, starter) => ({
  type: types.API_V1_THREADACTION_LIST_SUCCEEDED,
  response,
  starter
})
export const api_v1_threadaction_listFailed = (response, starter) => ({
  type: types.API_V1_THREADACTION_LIST_FAILED,
  response,
  starter
})
export const api_v1_threadaction_create = data => ({
  type: types.API_V1_THREADACTION_CREATE,
  data
})
export const api_v1_threadaction_createSucceeded = (response, starter) => ({
  type: types.API_V1_THREADACTION_CREATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_threadaction_createFailed = (response, starter) => ({
  type: types.API_V1_THREADACTION_CREATE_FAILED,
  response,
  starter
})
export const api_v1_threadaction_read = () => ({
  type: types.API_V1_THREADACTION_READ
})
export const api_v1_threadaction_readSucceeded = (response, starter) => ({
  type: types.API_V1_THREADACTION_READ_SUCCEEDED,
  response,
  starter
})
export const api_v1_threadaction_readFailed = (response, starter) => ({
  type: types.API_V1_THREADACTION_READ_FAILED,
  response,
  starter
})
export const api_v1_threadaction_update = data => ({
  type: types.API_V1_THREADACTION_UPDATE,
  data
})
export const api_v1_threadaction_updateSucceeded = (response, starter) => ({
  type: types.API_V1_THREADACTION_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_threadaction_updateFailed = (response, starter) => ({
  type: types.API_V1_THREADACTION_UPDATE_FAILED,
  response,
  starter
})
export const api_v1_threadaction_partial_update = data => ({
  type: types.API_V1_THREADACTION_PARTIAL_UPDATE,
  data
})
export const api_v1_threadaction_partial_updateSucceeded = (
  response,
  starter
) => ({
  type: types.API_V1_THREADACTION_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_threadaction_partial_updateFailed = (
  response,
  starter
) => ({
  type: types.API_V1_THREADACTION_PARTIAL_UPDATE_FAILED,
  response,
  starter
})
export const api_v1_threadaction_delete = () => ({
  type: types.API_V1_THREADACTION_DELETE
})
export const api_v1_threadaction_deleteSucceeded = (response, starter) => ({
  type: types.API_V1_THREADACTION_DELETE_SUCCEEDED,
  response,
  starter
})
export const api_v1_threadaction_deleteFailed = (response, starter) => ({
  type: types.API_V1_THREADACTION_DELETE_FAILED,
  response,
  starter
})
export const api_v1_threadmember_list = () => ({
  type: types.API_V1_THREADMEMBER_LIST
})
export const api_v1_threadmember_listSucceeded = (response, starter) => ({
  type: types.API_V1_THREADMEMBER_LIST_SUCCEEDED,
  response,
  starter
})
export const api_v1_threadmember_listFailed = (response, starter) => ({
  type: types.API_V1_THREADMEMBER_LIST_FAILED,
  response,
  starter
})
export const api_v1_threadmember_create = data => ({
  type: types.API_V1_THREADMEMBER_CREATE,
  data
})
export const api_v1_threadmember_createSucceeded = (response, starter) => ({
  type: types.API_V1_THREADMEMBER_CREATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_threadmember_createFailed = (response, starter) => ({
  type: types.API_V1_THREADMEMBER_CREATE_FAILED,
  response,
  starter
})
export const api_v1_threadmember_read = () => ({
  type: types.API_V1_THREADMEMBER_READ
})
export const api_v1_threadmember_readSucceeded = (response, starter) => ({
  type: types.API_V1_THREADMEMBER_READ_SUCCEEDED,
  response,
  starter
})
export const api_v1_threadmember_readFailed = (response, starter) => ({
  type: types.API_V1_THREADMEMBER_READ_FAILED,
  response,
  starter
})
export const api_v1_threadmember_update = data => ({
  type: types.API_V1_THREADMEMBER_UPDATE,
  data
})
export const api_v1_threadmember_updateSucceeded = (response, starter) => ({
  type: types.API_V1_THREADMEMBER_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_threadmember_updateFailed = (response, starter) => ({
  type: types.API_V1_THREADMEMBER_UPDATE_FAILED,
  response,
  starter
})
export const api_v1_threadmember_partial_update = data => ({
  type: types.API_V1_THREADMEMBER_PARTIAL_UPDATE,
  data
})
export const api_v1_threadmember_partial_updateSucceeded = (
  response,
  starter
) => ({
  type: types.API_V1_THREADMEMBER_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_threadmember_partial_updateFailed = (
  response,
  starter
) => ({
  type: types.API_V1_THREADMEMBER_PARTIAL_UPDATE_FAILED,
  response,
  starter
})
export const api_v1_threadmember_delete = () => ({
  type: types.API_V1_THREADMEMBER_DELETE
})
export const api_v1_threadmember_deleteSucceeded = (response, starter) => ({
  type: types.API_V1_THREADMEMBER_DELETE_SUCCEEDED,
  response,
  starter
})
export const api_v1_threadmember_deleteFailed = (response, starter) => ({
  type: types.API_V1_THREADMEMBER_DELETE_FAILED,
  response,
  starter
})
export const api_v1_user_list = () => ({ type: types.API_V1_USER_LIST })
export const api_v1_user_listSucceeded = (response, starter) => ({
  type: types.API_V1_USER_LIST_SUCCEEDED,
  response,
  starter
})
export const api_v1_user_listFailed = (response, starter) => ({
  type: types.API_V1_USER_LIST_FAILED,
  response,
  starter
})
export const api_v1_user_create = data => ({
  type: types.API_V1_USER_CREATE,
  data
})
export const api_v1_user_createSucceeded = (response, starter) => ({
  type: types.API_V1_USER_CREATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_user_createFailed = (response, starter) => ({
  type: types.API_V1_USER_CREATE_FAILED,
  response,
  starter
})
export const api_v1_user_read = () => ({ type: types.API_V1_USER_READ })
export const api_v1_user_readSucceeded = (response, starter) => ({
  type: types.API_V1_USER_READ_SUCCEEDED,
  response,
  starter
})
export const api_v1_user_readFailed = (response, starter) => ({
  type: types.API_V1_USER_READ_FAILED,
  response,
  starter
})
export const api_v1_user_update = data => ({
  type: types.API_V1_USER_UPDATE,
  data
})
export const api_v1_user_updateSucceeded = (response, starter) => ({
  type: types.API_V1_USER_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_user_updateFailed = (response, starter) => ({
  type: types.API_V1_USER_UPDATE_FAILED,
  response,
  starter
})
export const api_v1_user_partial_update = data => ({
  type: types.API_V1_USER_PARTIAL_UPDATE,
  data
})
export const api_v1_user_partial_updateSucceeded = (response, starter) => ({
  type: types.API_V1_USER_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_user_partial_updateFailed = (response, starter) => ({
  type: types.API_V1_USER_PARTIAL_UPDATE_FAILED,
  response,
  starter
})
export const api_v1_user_delete = () => ({ type: types.API_V1_USER_DELETE })
export const api_v1_user_deleteSucceeded = (response, starter) => ({
  type: types.API_V1_USER_DELETE_SUCCEEDED,
  response,
  starter
})
export const api_v1_user_deleteFailed = (response, starter) => ({
  type: types.API_V1_USER_DELETE_FAILED,
  response,
  starter
})
export const api_v1_verificationcode_list = () => ({
  type: types.API_V1_VERIFICATIONCODE_LIST
})
export const api_v1_verificationcode_listSucceeded = (response, starter) => ({
  type: types.API_V1_VERIFICATIONCODE_LIST_SUCCEEDED,
  response,
  starter
})
export const api_v1_verificationcode_listFailed = (response, starter) => ({
  type: types.API_V1_VERIFICATIONCODE_LIST_FAILED,
  response,
  starter
})
export const api_v1_verificationcode_create = data => ({
  type: types.API_V1_VERIFICATIONCODE_CREATE,
  data
})
export const api_v1_verificationcode_createSucceeded = (response, starter) => ({
  type: types.API_V1_VERIFICATIONCODE_CREATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_verificationcode_createFailed = (response, starter) => ({
  type: types.API_V1_VERIFICATIONCODE_CREATE_FAILED,
  response,
  starter
})
export const api_v1_verificationcode_read = () => ({
  type: types.API_V1_VERIFICATIONCODE_READ
})
export const api_v1_verificationcode_readSucceeded = (response, starter) => ({
  type: types.API_V1_VERIFICATIONCODE_READ_SUCCEEDED,
  response,
  starter
})
export const api_v1_verificationcode_readFailed = (response, starter) => ({
  type: types.API_V1_VERIFICATIONCODE_READ_FAILED,
  response,
  starter
})
export const api_v1_verificationcode_update = data => ({
  type: types.API_V1_VERIFICATIONCODE_UPDATE,
  data
})
export const api_v1_verificationcode_updateSucceeded = (response, starter) => ({
  type: types.API_V1_VERIFICATIONCODE_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_verificationcode_updateFailed = (response, starter) => ({
  type: types.API_V1_VERIFICATIONCODE_UPDATE_FAILED,
  response,
  starter
})
export const api_v1_verificationcode_partial_update = data => ({
  type: types.API_V1_VERIFICATIONCODE_PARTIAL_UPDATE,
  data
})
export const api_v1_verificationcode_partial_updateSucceeded = (
  response,
  starter
) => ({
  type: types.API_V1_VERIFICATIONCODE_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_verificationcode_partial_updateFailed = (
  response,
  starter
) => ({
  type: types.API_V1_VERIFICATIONCODE_PARTIAL_UPDATE_FAILED,
  response,
  starter
})
export const api_v1_verificationcode_delete = () => ({
  type: types.API_V1_VERIFICATIONCODE_DELETE
})
export const api_v1_verificationcode_deleteSucceeded = (response, starter) => ({
  type: types.API_V1_VERIFICATIONCODE_DELETE_SUCCEEDED,
  response,
  starter
})
export const api_v1_verificationcode_deleteFailed = (response, starter) => ({
  type: types.API_V1_VERIFICATIONCODE_DELETE_FAILED,
  response,
  starter
})
export const rest_auth_login_create = data => ({
  type: types.REST_AUTH_LOGIN_CREATE,
  data
})
export const rest_auth_login_createSucceeded = (response, starter) => ({
  type: types.REST_AUTH_LOGIN_CREATE_SUCCEEDED,
  response,
  starter
})
export const rest_auth_login_createFailed = (response, starter) => ({
  type: types.REST_AUTH_LOGIN_CREATE_FAILED,
  response,
  starter
})
export const rest_auth_logout_list = () => ({
  type: types.REST_AUTH_LOGOUT_LIST
})
export const rest_auth_logout_listSucceeded = (response, starter) => ({
  type: types.REST_AUTH_LOGOUT_LIST_SUCCEEDED,
  response,
  starter
})
export const rest_auth_logout_listFailed = (response, starter) => ({
  type: types.REST_AUTH_LOGOUT_LIST_FAILED,
  response,
  starter
})
export const rest_auth_logout_create = () => ({
  type: types.REST_AUTH_LOGOUT_CREATE
})
export const rest_auth_logout_createSucceeded = (response, starter) => ({
  type: types.REST_AUTH_LOGOUT_CREATE_SUCCEEDED,
  response,
  starter
})
export const rest_auth_logout_createFailed = (response, starter) => ({
  type: types.REST_AUTH_LOGOUT_CREATE_FAILED,
  response,
  starter
})
export const rest_auth_password_change_create = data => ({
  type: types.REST_AUTH_PASSWORD_CHANGE_CREATE,
  data
})
export const rest_auth_password_change_createSucceeded = (
  response,
  starter
) => ({
  type: types.REST_AUTH_PASSWORD_CHANGE_CREATE_SUCCEEDED,
  response,
  starter
})
export const rest_auth_password_change_createFailed = (response, starter) => ({
  type: types.REST_AUTH_PASSWORD_CHANGE_CREATE_FAILED,
  response,
  starter
})
export const rest_auth_password_reset_create = data => ({
  type: types.REST_AUTH_PASSWORD_RESET_CREATE,
  data
})
export const rest_auth_password_reset_createSucceeded = (
  response,
  starter
) => ({
  type: types.REST_AUTH_PASSWORD_RESET_CREATE_SUCCEEDED,
  response,
  starter
})
export const rest_auth_password_reset_createFailed = (response, starter) => ({
  type: types.REST_AUTH_PASSWORD_RESET_CREATE_FAILED,
  response,
  starter
})
export const rest_auth_password_reset_confirm_create = data => ({
  type: types.REST_AUTH_PASSWORD_RESET_CONFIRM_CREATE,
  data
})
export const rest_auth_password_reset_confirm_createSucceeded = (
  response,
  starter
) => ({
  type: types.REST_AUTH_PASSWORD_RESET_CONFIRM_CREATE_SUCCEEDED,
  response,
  starter
})
export const rest_auth_password_reset_confirm_createFailed = (
  response,
  starter
) => ({
  type: types.REST_AUTH_PASSWORD_RESET_CONFIRM_CREATE_FAILED,
  response,
  starter
})
export const rest_auth_registration_create = data => ({
  type: types.REST_AUTH_REGISTRATION_CREATE,
  data
})
export const rest_auth_registration_createSucceeded = (response, starter) => ({
  type: types.REST_AUTH_REGISTRATION_CREATE_SUCCEEDED,
  response,
  starter
})
export const rest_auth_registration_createFailed = (response, starter) => ({
  type: types.REST_AUTH_REGISTRATION_CREATE_FAILED,
  response,
  starter
})
export const rest_auth_registration_verify_email_create = data => ({
  type: types.REST_AUTH_REGISTRATION_VERIFY_EMAIL_CREATE,
  data
})
export const rest_auth_registration_verify_email_createSucceeded = (
  response,
  starter
) => ({
  type: types.REST_AUTH_REGISTRATION_VERIFY_EMAIL_CREATE_SUCCEEDED,
  response,
  starter
})
export const rest_auth_registration_verify_email_createFailed = (
  response,
  starter
) => ({
  type: types.REST_AUTH_REGISTRATION_VERIFY_EMAIL_CREATE_FAILED,
  response,
  starter
})
export const rest_auth_user_read = () => ({ type: types.REST_AUTH_USER_READ })
export const rest_auth_user_readSucceeded = (response, starter) => ({
  type: types.REST_AUTH_USER_READ_SUCCEEDED,
  response,
  starter
})
export const rest_auth_user_readFailed = (response, starter) => ({
  type: types.REST_AUTH_USER_READ_FAILED,
  response,
  starter
})
export const rest_auth_user_update = data => ({
  type: types.REST_AUTH_USER_UPDATE,
  data
})
export const rest_auth_user_updateSucceeded = (response, starter) => ({
  type: types.REST_AUTH_USER_UPDATE_SUCCEEDED,
  response,
  starter
})
export const rest_auth_user_updateFailed = (response, starter) => ({
  type: types.REST_AUTH_USER_UPDATE_FAILED,
  response,
  starter
})
export const rest_auth_user_partial_update = data => ({
  type: types.REST_AUTH_USER_PARTIAL_UPDATE,
  data
})
export const rest_auth_user_partial_updateSucceeded = (response, starter) => ({
  type: types.REST_AUTH_USER_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})
export const rest_auth_user_partial_updateFailed = (response, starter) => ({
  type: types.REST_AUTH_USER_PARTIAL_UPDATE_FAILED,
  response,
  starter
})
