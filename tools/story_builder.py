import os

# Define the path to the components folder
components_folder = '../lib/components'
stories_folder = '../stories'

# Ensure the stories folder exists
os.makedirs(stories_folder, exist_ok=True)

# Template for the story file content
story_template = """import type {{ Meta, StoryObj }} from '@storybook/react';
import type {{ ComponentProps }} from 'react';
import {{ {component_name} }} from '../lib/components/{component_name}';

type StoryProps = ComponentProps<typeof {component_name}>;

export default {{
  component: {component_name},
  title: 'Components/{component_name}',
}} satisfies Meta<StoryProps>;

type Story = StoryObj<StoryProps>;

export const Default: Story = {{
  args: {{
    children: '{component_name}',
  }},
}};
"""

# Iterate over each file in the components folder
for filename in os.listdir(components_folder):
    if filename.endswith('.tsx') or filename.endswith('.jsx'):
        component_name = filename[:-4]  # Remove the .tsx extension
        story_filename = f'{component_name}.stories.tsx'
        story_filepath = os.path.join(stories_folder, story_filename)

        # Check if the story file already exists
        if not os.path.exists(story_filepath):
            # Create the story file with the template content
            with open(story_filepath, 'w') as story_file:
                story_file.write(story_template.format(component_name=component_name))

print("Story files created successfully.")
