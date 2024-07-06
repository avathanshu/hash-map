
function HashMap() {
  const bucket = []
  let capacity = 0
  let load_factor = 0.75
  let bucket_size = capacity * load_factor
    const hash = (key) => {
        let hashCode = 0;
           
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
          hashCode = primeNumber * hashCode + key.charCodeAt(i);
          hashCode = hashCode % 16
        }
        return hashCode;
      } 

    const set = (key, value) => {
      let doesExist = false
      for (let index = 0; index < bucket.length; index++) {
        const to_search = hash(key).toString()
        if (bucket[index].hasOwnProperty(to_search)) {
          const code = hash(key)
          const obj = { [code]: value }
          bucket.splice(index, 1,  obj)
          capacity++
          doesExist = true
          break
        }
      }
      if (!doesExist) {
        const pos = bucket.indexOf(hash(key))
        const code = hash(key)
        const obj = { [code]: value }
        bucket.splice(pos, 0, obj)
        capacity++
      }
      if (bucket.length > bucket_size) {
        load_factor += 0.5
        
      }
    }

    const get = (key) => {
      for (let index = 0; index < bucket.length; index++) {
        const to_search = hash(key).toString()
        if (bucket[index].hasOwnProperty(to_search)) {
          return Object.values(bucket[index])
        }
      }
    }

    const length = () => {
      return bucket.length
    }

    const clear = () => {
      bucket = []
    }

    const values = () => {
      const arr = []
      for (let i = 0; i < bucket.length; i++) {
        arr.push(Object.values(bucket[i]))
      }
      return arr
    }

    const has = (key) => {
      for (let index = 0; index < bucket.length; index++) {
        const to_search = hash(key).toString()
        if (bucket[index].hasOwnProperty(to_search)) {
          return true
        }
      }
      return false
    }
    
    return { hash, set, bucket, get, has, length, clear, values }
}

const hashMap = HashMap()

const test = new HashMap()
test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')


console.log(test.bucket)
console.log(test.values())