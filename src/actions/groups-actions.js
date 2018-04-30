import { GROUP_ACTIONS } from '../constants';

export function addGroup() {
  return {
    type: GROUP_ACTIONS.ADD_GROUP
  };
}

export function selectGroup(groupID) {
  return {
    type: GROUP_ACTIONS.SELECT_GROUP,
    groupID
  };
}

export function unselectGroup(groupID) {
  return {
    type: GROUP_ACTIONS.UNSELECT_GROUP,
    groupID
  };
}

export function addToGroup( groupID, layerID, elementPrototype, elementID ) {
  return {
    type: GROUP_ACTIONS.ADD_TO_GROUP,
    groupID,
    layerID,
    elementPrototype,
    elementID
  };
}

export function removeFromGroup( groupID, layerID, elementPrototype, elementID ) {
  return {
    type: GROUP_ACTIONS.REMOVE_FROM_GROUP,
    groupID,
    layerID,
    elementPrototype,
    elementID
  };
}

export function setGroupProperties( groupID, properties ) {
  return {
    type: GROUP_ACTIONS.SET_GROUP_PROPERTIES,
    groupID,
    properties
  };
}

export function removeGroup( groupID ) {
  return {
    type: GROUP_ACTIONS.REMOVE_GROUP,
    groupID
  };
}