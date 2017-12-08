import E2num from '@/e2number.ts'

const oId = document.getElementById('e_num_str')
const submit = document.getElementById('submit')
submit.addEventListener('click', function () {
  const val = Number(oId.value)
  const e2Num = new E2num(val)
  alert(e2Num.e2n())
})
