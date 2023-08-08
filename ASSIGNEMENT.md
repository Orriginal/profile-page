# Test Assignment for Frontend Developer

## Part 1: Theoretical Questions

### 1. VUE3.js: Describe the advantages of using Vue.js compared to other JavaScript frameworks like React.

1. Vue.js offers well-structured official documentation.
2. Vue is a relatively lightweight framework which means it has a smaller bundle size compared to some other frameworks
   like React.
3. Vue.js leverages a reactive data binding system, which means that changes to the data automatically update the
   corresponding parts of the UI. This reactivity reduces the need for manual DOM manipulation and makes the development
   process more efficient.
4. Template system of React is always JSX. In Vue, there is more flexibility like HTML/JavaScript/Typescript/JSX. Since
   Vue3, they added also the possibilities to define custom elements like Web Components.

**FUN FACT**: React is a library.

### 2. Typescript: Explain how Typescript differs from regular JavaScript and how it can contribute to the development of robust applications.

1. Makes the code more readable. You can for example faster see what type of data a function returns, what type a
   certain parameter has to be or what type of variable you deal with. TypeScript allows you also to define custom
   types, interfaces, and enums making your codebase even more self-explanatory.
2. Javascript variable can be any type of value. It even can change types dynamically during runtime. With Typescript it
   is possible to define explicit data types. By setting those types it ensures that variables are used with the
   intended data types and prevent them from being reassigned with incompatible data later in the code.
3. When TypeScript is implemented diligently, following strict type declarations and avoiding the use of the `any` type,
   it significantly enhances type completion capabilities. This will make the developing process more smoothly and more
   enjoyable for the developer.

### 3. Tailwind CSS: What are the benefits of using Tailwind CSS? Provide an example of how you would use it to create a responsive design.

1. Tailwind CSS gives the possibility to build faster custom designed elements and reducing the need for writing custom
   css for every element.
2. Tailwind CSS is designed with responsiveness in mind. It includes utility classes that allow it to adapt the layout
   and styles for different screen sizes.
3. Tailwind CSS is fast to learn and delivers good documentation.
4. Tailwind CSS is not as other UI styling frameworks/libraries pre-styled. It's a utility-first approach where its easy
   to modify to a certain design system.
5. Tailwind CSS is tree shakable, it will optimize the final CSS output, ensuring that only the classes used in your
   project are included in the production build, resulting in minimal file size and faster loading times.

I would make responsive design with `sm: md: lg: xl:`. For example:

On mobile under each other and on md and above next to each other.

```hmtl
<!--- Mobile (xs): 100% width, md and above have of the width spacing --->
<div class="w-full md:w-1/2"></div>
<div class="w-full md:w-1/2"></div>
```

## Part 2: Programming Task && Part 3: Reflection

I made a realtime serverless code example of profile page. The profile page has only the basics.

- User information can be edited without undergoing validation. While I could have implemented a custom validation for
  each field, this would involve using conditional statements and hardcoded error messages. Alternatively, performing
  validation on the front-end would require a more generic approach. For the example purpose this would cost me too much
  work to design and implementing it.
- I've established a 'library' directory within the 'src' directory. While I've placed it within the same project as the
  other front-end components for simplicity, in a real-world scenario, it would be advisable to create a distinct
  package that operates independently. The purpose of this 'library' is to serve as an internal/external components
  library, taking the principles of [ATOMIC design system](https://bradfrost.com/blog/post/atomic-web-design/). The
  components within this library are strictly designed by internal design standards and zero business logic.
  These components are intended for use in whatever packages within the software landscape.
- I've integrated documentation for the library as example. This documentation is made with `Storybook` and it shows
  documentation for the front-end components in the library. It's important to note that I maintained simplicity in the
  showcased components because this is just an example. Making quality components takes time and needs more context of
  where the component gets used for.
- I've employed hardcoded indexes for data storage. It's crucial to say that this practice is not recommended in
  practical scenarios, except for instances such as this illustrative example. In normal circumstances, the use
  of unique IDs or GUIDs would be the preferred approach.
- For storing the profile images, I would recommend to use both validation and sanitization processes. I haven't done
  anything of that in this example.
- In an optimal scenario, images are stored using Content Delivery Networks (CDNs) or cloud-based storage solutions,
  often coupled with caching mechanisms to enhance performance.
- Since this project started without any existing guidelines, I took the initiative to incorporate strict ESLint rules (
  by plugins) and prettier formatting. Still for further steps it would be essential to spend way more time on linting
  rules ensure consistently well-formatted and linted code.
- One thing missing is a strong plan for testing, which needs big improvements in this example.
- I took the chance to look again at TailwindCSS and remember what it can do again. I like Tailwind, but I have the
  feeling that I can still work allot more efficient with it. I have some really long classes... I'm still used to
  developing components and pages in Vue 2 `class API`, now I worked with Vue 3 `Composition API` for first time. It was
  a bit challenging to switch, but it helped me learn and adapt in a good way.

Here the links to the code but also live demo's.

I recommend to also try to open the profile page on two different pc's and change the image on one pc and see the magic
💥
- GitHub: https://github.com/Orriginal/profile-page
- Profile page: https://orriginal.github.io/profile-page/
- Component documentation page: https://jankuipersdevelopment.nl/

