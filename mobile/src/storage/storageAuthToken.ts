import { AUTH_TOKEN_STORAGE } from "./storageConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";

export async function storageAuthTokenSave(token: string) {
  await AsyncStorage.setItem(AUTH_TOKEN_STORAGE, JSON.stringify(token));
}

export async function storageAuthTokenGet() {
  return await AsyncStorage.getItem(AUTH_TOKEN_STORAGE);
}

export async function storageAuthTokenRemove() {
  await AsyncStorage.removeItem(AUTH_TOKEN_STORAGE);
}
