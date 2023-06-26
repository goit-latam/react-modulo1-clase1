import { RecipeList } from './recipe/RecipeList';
import recipes from '../components/recipe/recipes.json';
import paintings from '../components/painting/paintings.json';
import Section from './painting/Section';
import PaintingList from './painting/PaintingList';

export const App = () => {
  return (
    <>
      <RecipeList items={recipes} />

      <Section title="Top of the week">
        <PaintingList items={paintings} />
      </Section>
    </>
  );
};
