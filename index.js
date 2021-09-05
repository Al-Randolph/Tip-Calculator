
document.addEventListener('DOMContentLoaded', () => {

	let tipBtns = document.querySelectorAll('.tips-percent')
	let custom = document.querySelector('.tips-percent-input')
	let tipAmount = document.querySelector('#tip-ammount')
	let totalAmmount = document.querySelector('#total-ammount')


	custom.addEventListener('input', (event) => {

		let numPeople = Number(document.querySelector('#num-people').value)
		let bill = Number(document.querySelector('#bill').value)

		if (numPeople <= 0) {

			alert(`Number Of People Can't Be Zero`)
		
		}

		if(custom.value === ''){

			tipAmount.innerHTML = ''
			totalAmmount.innerHTML = ''			
		}else{

			let valueInput = Number(custom.value) / 100
			let tipVal = (bill * valueInput) / numPeople
			let totalAmm = bill / numPeople
			
			tipAmount.innerHTML = tipVal.toFixed(2)
			totalAmmount.innerHTML = totalAmm.toFixed(2)

		}
	})

	tipBtns.forEach(btn => {

		btn.addEventListener('click', (event) => {

			let bill = Number(document.querySelector('#bill').value)
			let numPeople = Number(document.querySelector('#num-people').value)

			if (numPeople <= 0) {

				alert(`Number Of People Can't Be Zero`)
			
			}else{

				let tipVal = (bill * btn.value) / numPeople
				let totalAmm = bill / numPeople
				tipAmount.innerHTML = tipVal.toFixed(2)
				totalAmmount.innerHTML = totalAmm.toFixed(2)

			}
		})
	})

	let resetBtn = document.querySelector('.reset-btn').addEventListener('click', (event) => {

		let bill = document.querySelector('#bill').value = null
		let numPeople = document.querySelector('#num-people').value = null
		tipAmount.innerHTML = ''
		totalAmmount.innerHTML = ''
	})
})
