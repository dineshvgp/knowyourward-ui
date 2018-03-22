const SELECT_PARTICIPANT_ATTRIBUTE_TYPE = "SELECT_PARTICIPANT_ATTRIBUTE_TYPE";
const SELECT_PARTICIPANT_ATTRIBUTE = "SELECT_PARTICIPANT_ATTRIBUTE";

const RESET_PARTICIPANT_ATTRIBUTE_TYPE = "RESET_PARTICIPANT_ATTRIBUTE_TYPE";

const REQUEST_POSSIBLE_PARTICIPANT_ATTRIBUTES =
  "REQUEST_POSSIBLE_PARTICIPANT_ATTRIBUTES";
const SUCCESS_POSSIBLE_PARTICIPANT_ATTRIBUTES =
  "SUCCESS_POSSIBLE_PARTICIPANT_ATTRIBUTES";
const ERROR_POSSIBLE_PARTICIPANT_ATTRIBUTES =
  "ERROR_POSSIBLE_PARTICIPANT_ATTRIBUTES";

const selectParticipantAttributeType = attributeTypeID => ({
  type: SELECT_PARTICIPANT_ATTRIBUTE_TYPE,
  attributeTypeID
});

const selectParticipantAttribute = attributeID => ({
  type: SELECT_PARTICIPANT_ATTRIBUTE,
  attributeID
});

export {
  SELECT_PARTICIPANT_ATTRIBUTE_TYPE,
  SELECT_PARTICIPANT_ATTRIBUTE,
  RESET_PARTICIPANT_ATTRIBUTE_TYPE,
  REQUEST_POSSIBLE_PARTICIPANT_ATTRIBUTES,
  SUCCESS_POSSIBLE_PARTICIPANT_ATTRIBUTES,
  ERROR_POSSIBLE_PARTICIPANT_ATTRIBUTES,
  selectParticipantAttributeType,
  selectParticipantAttribute
};
