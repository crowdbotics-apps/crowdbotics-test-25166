import axios from "axios"
const crowdboticstestAPI = axios.create({
  baseURL: "https://crowdbotics-test-25166-prod.herokuapp.com/",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_v1_contact_list(action) {
  return crowdboticstestAPI.get(`/api/v1/contact/`)
}
function api_v1_contact_create(action) {
  return crowdboticstestAPI.post(`/api/v1/contact/`, null, {
    data: action.data
  })
}
function api_v1_contact_read(action) {
  return crowdboticstestAPI.get(`/api/v1/contact/${action.id}/`)
}
function api_v1_contact_update(action) {
  return crowdboticstestAPI.put(`/api/v1/contact/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_contact_partial_update(action) {
  return crowdboticstestAPI.patch(`/api/v1/contact/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_contact_delete(action) {
  return crowdboticstestAPI.delete(`/api/v1/contact/${action.id}/`)
}
function api_v1_customtext_list(action) {
  return crowdboticstestAPI.get(`/api/v1/customtext/`)
}
function api_v1_customtext_read(action) {
  return crowdboticstestAPI.get(`/api/v1/customtext/${action.id}/`)
}
function api_v1_customtext_update(action) {
  return crowdboticstestAPI.put(`/api/v1/customtext/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_customtext_partial_update(action) {
  return crowdboticstestAPI.patch(`/api/v1/customtext/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_forwardedmessage_list(action) {
  return crowdboticstestAPI.get(`/api/v1/forwardedmessage/`)
}
function api_v1_forwardedmessage_create(action) {
  return crowdboticstestAPI.post(`/api/v1/forwardedmessage/`, null, {
    data: action.data
  })
}
function api_v1_forwardedmessage_read(action) {
  return crowdboticstestAPI.get(`/api/v1/forwardedmessage/${action.id}/`)
}
function api_v1_forwardedmessage_update(action) {
  return crowdboticstestAPI.put(
    `/api/v1/forwardedmessage/${action.id}/`,
    null,
    { data: action.data }
  )
}
function api_v1_forwardedmessage_partial_update(action) {
  return crowdboticstestAPI.patch(
    `/api/v1/forwardedmessage/${action.id}/`,
    null,
    { data: action.data }
  )
}
function api_v1_forwardedmessage_delete(action) {
  return crowdboticstestAPI.delete(`/api/v1/forwardedmessage/${action.id}/`)
}
function api_v1_homepage_list(action) {
  return crowdboticstestAPI.get(`/api/v1/homepage/`)
}
function api_v1_homepage_read(action) {
  return crowdboticstestAPI.get(`/api/v1/homepage/${action.id}/`)
}
function api_v1_homepage_update(action) {
  return crowdboticstestAPI.put(`/api/v1/homepage/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_homepage_partial_update(action) {
  return crowdboticstestAPI.patch(`/api/v1/homepage/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_login_create(action) {
  return crowdboticstestAPI.post(`/api/v1/login/`)
}
function api_v1_message_list(action) {
  return crowdboticstestAPI.get(`/api/v1/message/`)
}
function api_v1_message_create(action) {
  return crowdboticstestAPI.post(`/api/v1/message/`, null, {
    data: action.data
  })
}
function api_v1_message_read(action) {
  return crowdboticstestAPI.get(`/api/v1/message/${action.id}/`)
}
function api_v1_message_update(action) {
  return crowdboticstestAPI.put(`/api/v1/message/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_message_partial_update(action) {
  return crowdboticstestAPI.patch(`/api/v1/message/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_message_delete(action) {
  return crowdboticstestAPI.delete(`/api/v1/message/${action.id}/`)
}
function api_v1_messageaction_list(action) {
  return crowdboticstestAPI.get(`/api/v1/messageaction/`)
}
function api_v1_messageaction_create(action) {
  return crowdboticstestAPI.post(`/api/v1/messageaction/`, null, {
    data: action.data
  })
}
function api_v1_messageaction_read(action) {
  return crowdboticstestAPI.get(`/api/v1/messageaction/${action.id}/`)
}
function api_v1_messageaction_update(action) {
  return crowdboticstestAPI.put(`/api/v1/messageaction/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_messageaction_partial_update(action) {
  return crowdboticstestAPI.patch(`/api/v1/messageaction/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_messageaction_delete(action) {
  return crowdboticstestAPI.delete(`/api/v1/messageaction/${action.id}/`)
}
function api_v1_profile_list(action) {
  return crowdboticstestAPI.get(`/api/v1/profile/`)
}
function api_v1_profile_create(action) {
  return crowdboticstestAPI.post(`/api/v1/profile/`, null, {
    data: action.data
  })
}
function api_v1_profile_read(action) {
  return crowdboticstestAPI.get(`/api/v1/profile/${action.id}/`)
}
function api_v1_profile_update(action) {
  return crowdboticstestAPI.put(`/api/v1/profile/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_profile_partial_update(action) {
  return crowdboticstestAPI.patch(`/api/v1/profile/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_profile_delete(action) {
  return crowdboticstestAPI.delete(`/api/v1/profile/${action.id}/`)
}
function api_v1_signup_create(action) {
  return crowdboticstestAPI.post(`/api/v1/signup/`, null, { data: action.data })
}
function api_v1_thread_list(action) {
  return crowdboticstestAPI.get(`/api/v1/thread/`)
}
function api_v1_thread_create(action) {
  return crowdboticstestAPI.post(`/api/v1/thread/`, null, { data: action.data })
}
function api_v1_thread_read(action) {
  return crowdboticstestAPI.get(`/api/v1/thread/${action.id}/`)
}
function api_v1_thread_update(action) {
  return crowdboticstestAPI.put(`/api/v1/thread/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_thread_partial_update(action) {
  return crowdboticstestAPI.patch(`/api/v1/thread/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_thread_delete(action) {
  return crowdboticstestAPI.delete(`/api/v1/thread/${action.id}/`)
}
function api_v1_threadaction_list(action) {
  return crowdboticstestAPI.get(`/api/v1/threadaction/`)
}
function api_v1_threadaction_create(action) {
  return crowdboticstestAPI.post(`/api/v1/threadaction/`, null, {
    data: action.data
  })
}
function api_v1_threadaction_read(action) {
  return crowdboticstestAPI.get(`/api/v1/threadaction/${action.id}/`)
}
function api_v1_threadaction_update(action) {
  return crowdboticstestAPI.put(`/api/v1/threadaction/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_threadaction_partial_update(action) {
  return crowdboticstestAPI.patch(`/api/v1/threadaction/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_threadaction_delete(action) {
  return crowdboticstestAPI.delete(`/api/v1/threadaction/${action.id}/`)
}
function api_v1_threadmember_list(action) {
  return crowdboticstestAPI.get(`/api/v1/threadmember/`)
}
function api_v1_threadmember_create(action) {
  return crowdboticstestAPI.post(`/api/v1/threadmember/`, null, {
    data: action.data
  })
}
function api_v1_threadmember_read(action) {
  return crowdboticstestAPI.get(`/api/v1/threadmember/${action.id}/`)
}
function api_v1_threadmember_update(action) {
  return crowdboticstestAPI.put(`/api/v1/threadmember/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_threadmember_partial_update(action) {
  return crowdboticstestAPI.patch(`/api/v1/threadmember/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_threadmember_delete(action) {
  return crowdboticstestAPI.delete(`/api/v1/threadmember/${action.id}/`)
}
function api_v1_user_list(action) {
  return crowdboticstestAPI.get(`/api/v1/user/`)
}
function api_v1_user_create(action) {
  return crowdboticstestAPI.post(`/api/v1/user/`, null, { data: action.data })
}
function api_v1_user_read(action) {
  return crowdboticstestAPI.get(`/api/v1/user/${action.id}/`)
}
function api_v1_user_update(action) {
  return crowdboticstestAPI.put(`/api/v1/user/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_user_partial_update(action) {
  return crowdboticstestAPI.patch(`/api/v1/user/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_user_delete(action) {
  return crowdboticstestAPI.delete(`/api/v1/user/${action.id}/`)
}
function api_v1_verificationcode_list(action) {
  return crowdboticstestAPI.get(`/api/v1/verificationcode/`)
}
function api_v1_verificationcode_create(action) {
  return crowdboticstestAPI.post(`/api/v1/verificationcode/`, null, {
    data: action.data
  })
}
function api_v1_verificationcode_read(action) {
  return crowdboticstestAPI.get(`/api/v1/verificationcode/${action.id}/`)
}
function api_v1_verificationcode_update(action) {
  return crowdboticstestAPI.put(
    `/api/v1/verificationcode/${action.id}/`,
    null,
    { data: action.data }
  )
}
function api_v1_verificationcode_partial_update(action) {
  return crowdboticstestAPI.patch(
    `/api/v1/verificationcode/${action.id}/`,
    null,
    { data: action.data }
  )
}
function api_v1_verificationcode_delete(action) {
  return crowdboticstestAPI.delete(`/api/v1/verificationcode/${action.id}/`)
}
function rest_auth_login_create(action) {
  return crowdboticstestAPI.post(`/rest-auth/login/`, null, {
    data: action.data
  })
}
function rest_auth_logout_list(action) {
  return crowdboticstestAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(action) {
  return crowdboticstestAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(action) {
  return crowdboticstestAPI.post(`/rest-auth/password/change/`, null, {
    data: action.data
  })
}
function rest_auth_password_reset_create(action) {
  return crowdboticstestAPI.post(`/rest-auth/password/reset/`, null, {
    data: action.data
  })
}
function rest_auth_password_reset_confirm_create(action) {
  return crowdboticstestAPI.post(`/rest-auth/password/reset/confirm/`, null, {
    data: action.data
  })
}
function rest_auth_registration_create(action) {
  return crowdboticstestAPI.post(`/rest-auth/registration/`, null, {
    data: action.data
  })
}
function rest_auth_registration_verify_email_create(action) {
  return crowdboticstestAPI.post(
    `/rest-auth/registration/verify-email/`,
    null,
    { data: action.data }
  )
}
function rest_auth_user_read(action) {
  return crowdboticstestAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(action) {
  return crowdboticstestAPI.put(`/rest-auth/user/`, null, { data: action.data })
}
function rest_auth_user_partial_update(action) {
  return crowdboticstestAPI.patch(`/rest-auth/user/`, null, {
    data: action.data
  })
}
export const apiService = {
  api_v1_contact_list,
  api_v1_contact_create,
  api_v1_contact_read,
  api_v1_contact_update,
  api_v1_contact_partial_update,
  api_v1_contact_delete,
  api_v1_customtext_list,
  api_v1_customtext_read,
  api_v1_customtext_update,
  api_v1_customtext_partial_update,
  api_v1_forwardedmessage_list,
  api_v1_forwardedmessage_create,
  api_v1_forwardedmessage_read,
  api_v1_forwardedmessage_update,
  api_v1_forwardedmessage_partial_update,
  api_v1_forwardedmessage_delete,
  api_v1_homepage_list,
  api_v1_homepage_read,
  api_v1_homepage_update,
  api_v1_homepage_partial_update,
  api_v1_login_create,
  api_v1_message_list,
  api_v1_message_create,
  api_v1_message_read,
  api_v1_message_update,
  api_v1_message_partial_update,
  api_v1_message_delete,
  api_v1_messageaction_list,
  api_v1_messageaction_create,
  api_v1_messageaction_read,
  api_v1_messageaction_update,
  api_v1_messageaction_partial_update,
  api_v1_messageaction_delete,
  api_v1_profile_list,
  api_v1_profile_create,
  api_v1_profile_read,
  api_v1_profile_update,
  api_v1_profile_partial_update,
  api_v1_profile_delete,
  api_v1_signup_create,
  api_v1_thread_list,
  api_v1_thread_create,
  api_v1_thread_read,
  api_v1_thread_update,
  api_v1_thread_partial_update,
  api_v1_thread_delete,
  api_v1_threadaction_list,
  api_v1_threadaction_create,
  api_v1_threadaction_read,
  api_v1_threadaction_update,
  api_v1_threadaction_partial_update,
  api_v1_threadaction_delete,
  api_v1_threadmember_list,
  api_v1_threadmember_create,
  api_v1_threadmember_read,
  api_v1_threadmember_update,
  api_v1_threadmember_partial_update,
  api_v1_threadmember_delete,
  api_v1_user_list,
  api_v1_user_create,
  api_v1_user_read,
  api_v1_user_update,
  api_v1_user_partial_update,
  api_v1_user_delete,
  api_v1_verificationcode_list,
  api_v1_verificationcode_create,
  api_v1_verificationcode_read,
  api_v1_verificationcode_update,
  api_v1_verificationcode_partial_update,
  api_v1_verificationcode_delete,
  rest_auth_login_create,
  rest_auth_logout_list,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_read,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
