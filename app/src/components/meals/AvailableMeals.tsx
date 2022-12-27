/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useEffect, useState } from 'react';
import Card from '../UI/Card';
import MealItem from './item/MealItem';

type Meal = {
  id: string;
  key: string;
  name: string;
  description: string;
  price: number;
};

const AvailableMeals = () => {
  const [meals, setMeals] = useState<Meal[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState<string>('');

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch('http://localhost:8080/dummyMeals');

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const responseData = await response.json();
      const loadedMeals: Meal[] = [];

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          key: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }
      setMeals(loadedMeals);
      setIsLoading(false);
    };
    fetchMeals().catch((error) => {
      setIsLoading(false);
      if (error instanceof Error) {
        setHttpError(error.message);
      }
    });
  }, []);

  if (isLoading) {
    return (
      <section css={styles.mealLoading}>
        <p>Loading...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section css={styles.mealError}>
        <p>{httpError}</p>
      </section>
    );
  }

  const mealsList = meals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section css={styles.meal}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;

const styles = {
  meal: css`
    max-width: 60rem;
    width: 90%;
    margin: 2rem auto;
    animation: meals-appear 1s ease-out forwards;

    ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    @keyframes meals-appear {
      from {
        opacity: 0;
        transform: translateY(3rem);
      }

      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `,
  mealLoading: css`
    text-align: center;
    color: white;
  `,
  mealError: css`
    text-align: center;
    color: red;
  `,
};
