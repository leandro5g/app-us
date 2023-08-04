import { useCallback } from "react";
import EncryptedStorage from "react-native-encrypted-storage";

const KEY_TOKEN = "@us:token";
const KEY_USER = "@us:user";

interface SaveProps {
  key: string;
  data: Object;
}

const useStorage = () => {
  const saveStorage = useCallback(async ({ key, data }: SaveProps) => {
    try {
      await EncryptedStorage.setItem(key, JSON.stringify(data));
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }, []);

  const getItem = useCallback(async (key: string) => {
    try {
      const response = await EncryptedStorage.getItem(key);
      return JSON.parse(response);
    } catch (error) {
      console.log(error);
      return false;
    }
  }, []);

  const removeItem = useCallback(async (key: string) => {
    try {
      await EncryptedStorage.removeItem(key);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return {
    saveStorage,
    getItem,
    removeItem,
    KEY_TOKEN,
    KEY_USER,
  };
};

export { useStorage };
