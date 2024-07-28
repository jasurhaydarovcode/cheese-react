import React from 'react'

const Carousel = () => {
  return (
    <div>
        <div class="flex flex-col md:flex-row bg-background p-6 rounded-lg shadow-lg">
  <div class="flex bg-cover bg-center rounded-lg" src="https://openui.fly.dev/openui/600x400.svg?text=Cheese+Making');">
    <div class="p-4 text-white">
      <h2 class="text-3xl font-bold">НАБОРЫ ДЛЯ СЫРОДЕЛИЯ</h2>
      <p class="mt-2">Все что вам нужно для приготовления сыра в домашних условиях</p>
      <button class="mt-4 bg-secondary text-secondary-foreground hover:bg-secondary/80 px-4 py-2 rounded-lg">Смотреть наборы</button>
    </div>
  </div>
  <div class="flex-1 flex flex-col justify-between p-4">
    <div class="mb-4 flex">
      <div class="flex-1">
        <h3 class="text-xl font-semibold">Акции</h3>
        <p class="text-muted-foreground">ЗАКВСКИ ДЛЯ СЫРА</p>
        <img aria-hidden="true" alt="cheese-offers" src="https://openui.fly.dev/openui/300x200.svg?text=Cheese+Offers" class="mt-4 rounded-lg" />
      </div>
      <div class="flex-1 ml-4">
        <h3 class="text-xl font-semibold">Рецепты</h3>
        <p class="text-muted-foreground">СЫРЫ С ПЛЕСЕНЬЮ</p>
        <img aria-hidden="true" alt="cheese-recipes" src="https://openui.fly.dev/openui/300x200.svg?text=Cheese+Recipes" class="mt-4 rounded-lg" />
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Carousel