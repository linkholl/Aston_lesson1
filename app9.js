function processOrder() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const paidOrders = orders.filter(order => order.paid);
        
        const deliveryPromises = paidOrders.map(order => 
          fetchDeliveryInfo(order.id) // Вызываем функцию для каждого заказа
        );
        
        Promise.all(deliveryPromises)
          .then(deliveryResults => {
            // Объединяем данные заказов с информацией о доставке
            const finalOrders = paidOrders.map((order, index) => ({
              ...order, // Копируем свойства заказа
              deliveryTime: deliveryResults[index].deliveryTime // Добавляем доставку
            }));
            
    
            console.log("Финальные заказы:", finalOrders);
            resolve(finalOrders); 
          })
          .catch(error => {
            // Обработка ошибок
            console.error("Ошибка:", error);
            reject(error);
          });
      }, 2000); 
    });
  }

  processOrder()
  .then(result => console.log("Успешно:", result))
  .catch(error => console.error("Провал:", error));

