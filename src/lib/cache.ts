import AsyncStorage from '@react-native-async-storage/async-storage'

const prefix = 'cache_'
const defaultExpiredTime = 5 * 60 * 1000

const isExpired = (
  item: { timestamp: number; value: unknown },
  expiredTime = defaultExpiredTime
) => {
  const now = Date.now()
  const diff = now - item.timestamp
  return diff > expiredTime
}
export const remove = async (key: string) => {
  try {
    await AsyncStorage.removeItem(prefix + key)
  } catch (e) {
    // remove error
  }
}
export const store = async (key: string, value: unknown) => {
  console.log('request to store', key, value)
  const item = {
    value,
    timestamp: Date.now(),
  }
  try {
    await AsyncStorage.setItem(prefix + key, JSON.stringify(item))
  } catch (e) {
    // saving error
    console.log('error storing', e)
  }
}

export const get = async (
  key: string,
  returnExpired = true,
  expiredTime = defaultExpiredTime
) => {
  console.log('request to get', key)
  try {
    const value = await AsyncStorage.getItem(prefix + key)
    if (value === null) return null
    const item = JSON.parse(value)
    if (returnExpired) return item.value
    if (isExpired(item, expiredTime)) {
      await remove(key)
      return null
    }
    return item.value
  } catch (e) {
    console.log('error getting', e)
    // error reading value
  }
}
