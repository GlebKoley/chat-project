export const _transformChatTime = (time) => {
   const dateObject = Number(time) * 1000;
   const parseDate = new Date(dateObject);

   const hours = parseDate.getUTCHours().toString().length === 1 ? '0' + parseDate.getUTCHours().toString() : parseDate.getUTCHours().toString();
   const minutes = parseDate.getUTCMinutes().toString().length === 1 ? '0' + parseDate.getUTCMinutes().toString() : parseDate.getUTCMinutes().toString();

   return `${hours}:${minutes}`;
};

export const _transformChatDate = (date) => {
   const dateObject = Number(date) * 1000;
   const parseDate = new Date(dateObject);

   const day = parseDate.getUTCDay().toString().length === 1 ? '0' + (parseDate.getUTCDay() + 1).toString() : parseDate.getUTCDay().toString();
   const month = parseDate.getUTCMonth().toString().length === 1 ? '0' + (parseDate.getUTCMonth() + 1).toString() : parseDate.getUTCMonth().toString();
   return `${day}.${month}.${parseDate.getUTCFullYear().toString()}`;
};
