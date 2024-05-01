import { config, auth, } from '@grafbase/sdk';
// @ts-ignore
import { g } from 'sdk_1';
// @ts-ignore
const User = g.model('User', {
  name: g.string().length({ min: 2, max: 100 }),
  email: g.string().unique(),
  avatarUrl: g.url(),
  description: g.string().length({ min: 2, max: 1000 }).optional(),
  githubUrl: g.url().optional(),
  linkedinUrl: g.url().optional(), 
  // @ts-ignore
  projects: g.relation(() => Project).list().optional(),
})

// @ts-ignore
const Project = g.model('Project', {
  title: g.string().length({ min: 3 }),
  description: g.string(), 
  image: g.url(),
  liveSiteUrl: g.url(), 
  githubUrl: g.url(), 
  // @ts-ignore
  category: g.string().search(),
  // @ts-ignore
  createdBy: g.relation(() => User),
})

// const jwt = auth.JWT({
//   issuer: 'grafbase',
//   secret:  g.env('NEXTAUTH_SECRET')
// })

export default config({
  schema: g,
  // auth: {
  //   providers: [jwt],
  //   rules: (rules) => rules.private()
  // },
})
