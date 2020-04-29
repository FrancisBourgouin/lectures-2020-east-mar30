
const countdownFactory = time => {

  const countdown = () => {
    for (let i = time; i > 0; i--) {
      console.log(`${i} remaining`)
    }
  }

  return countdown

}

console.log(countdownFactory(5))

// Returning

// () => {
//   for (let i = 5; i > 0; i--) {
//     console.log(`${i} remaining`)
//   }
// }


const countdownFrom10 = countdownFactory(10)

// Returning

// () => {
//   for (let i = 10; i > 0; i--) {
//     console.log(`${i} remaining`)
//   }
// }

const countdownFrom5 = countdownFactory(5)

// Returning

// () => {
//   for (let i = 5; i > 0; i--) {
//     console.log(`${i} remaining`)
//   }
// }

// countdownFrom10()
// countdownFrom5()


// {name:"Hello", prices:[1,2,3,4,65,7]}

const createPriceList = (name) => {
  return { name, prices: [Math.random(), Math.random()] }
}

console.log(createPriceList("Burger King"))
console.log(createPriceList("Burger King"))

const createPriceListFor = (name) => {
  const fakeRandom = Math.random()
  return () => ({ name, prices: [fakeRandom, Math.random(), Math.random()] })
}

const priceListBK = createPriceListFor("Burger King")

console.log(priceListBK())
console.log(priceListBK())
console.log(priceListBK())
console.log(priceListBK())
console.log(priceListBK())
console.log(priceListBK())
console.log(priceListBK())
console.log(priceListBK())