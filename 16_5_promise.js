const promise4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const dig4 = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
    if (dig4 % 2 == 0) {
      resolve(dig4);
    } else reject(dig4);
  }, 3000);
});

promise4
  .then((dig4Date) =>
    console.log("Завершено успешно. Сгенерированное число - " + dig4Date)
  )
  .catch((dig4Date) =>
    console.log("Завершено с ошибкой. Сгенерированное число - " + dig4Date)
  );
