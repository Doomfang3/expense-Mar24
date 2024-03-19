// Entry
class Entry {
  constructor(date, amount, description) {
    this.date = date
    this.amount = amount
    this.description = description
  }

  getFormattedAmount() {
    return `${this.amount} €`
  }
}

// Income
class Income extends Entry {
  constructor(date, amount, description) {
    super(date, amount, description)
    this.type = 'income'
  }
}

// Expense
class Expense extends Entry {
  constructor(date, amount, description, paid) {
    super(date, amount, description)
    this.paid = paid
    this.type = 'expense'
  }

  getFormattedAmount() {
    return `-${this.amount} €`
  }
}

// Budget
class Budget {
  constructor() {
    this.entries = []
  }

  addEntry(entry) {
    this.entries.push(entry)
  }

  getCurrentBalance() {
    /* if (this.entries.length === 0) {
      return 0
    }

    let balance = 0
    this.entries.forEach(function (currentEntry) {
      if (currentEntry.type === 'income') {
        balance += currentEntry.amount
      } else if (currentEntry.type === 'expense') {
        balance -= currentEntry.amount
      }
    })

    return balance */

    return this.entries.reduce((accumulator, currentEntry) => {
      if (currentEntry.type === 'income') {
        return accumulator + currentEntry.amount
      } else if (currentEntry.type === 'expense') {
        return accumulator - currentEntry.amount
      }
    }, 0)
  }

  getFormattedEntries() {
    const formattedArray = []

    this.entries.forEach(function (currentEntry) {
      let baseString = `${currentEntry.date} | ${currentEntry.description} | `
      if (currentEntry.type === 'income') {
        baseString += `${currentEntry.amount} €`
      } else if (currentEntry.type === 'expense') {
        baseString += `-${currentEntry.amount} €`
      }

      formattedArray.push(baseString)
    })

    return formattedArray
  }
}
