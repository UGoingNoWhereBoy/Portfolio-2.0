'use client'
import { deskTool } from 'sanity/desk'
import { defineType, defineField } from 'sanity'




export const config = {
    projectId: "zckihg4l",
    dataset: "production",
    apiVersion: "2021-10-21", 
    title: 'Portfolio',
    basePath: "/admin",
    plugins: [deskTool()],
    schema: {
        types: [
            defineType({
                name: 'projects',
                title: 'Projects',
                type: 'document', 
                fields: [
                    defineField({
                        name: 'title',
                        title: 'title',
                        type: 'string',
                    }),
                    defineField({
                        name: 'body',
                        title: 'Body',
                        type: 'text',
                    }),
                    defineField({
                        name: 'image',
                        title: 'Project Image',
                        type: 'image',
                        options: {
                            hotspot: true,
                        }
                    }),
                    defineField({
                        name: 'video',
                        title: 'Video Link',
                        type: 'string',
                    }),
                    defineField({
                        name: 'demo',
                        title: 'Demo Link',
                        type: 'string',
                    }),
                    defineField({
                        name: 'github',
                        title: 'Github Link',
                        type: 'string',
                    }),
                    defineField({
                        name: 'stack',
                        title: 'Stack used',
                        type: 'array',
                        of: [{type: 'string'}]
                    }),
                    
                ]  
            }),
            defineType({
                name: 'accountsnew',
                title: 'Accounts',
                type: 'document',  
                fields: [
                    defineField({
                        name: 'account',
                        title: 'Account Name',
                        type: 'string'
                    }),
                    defineField({
                        name: 'uname',
                        title: 'Account User Tag',
                        type: 'string'
                    }),
                    defineField({
                        name: 'link',
                        title: 'Account Link',
                        type: 'string'
                    }),
                ]
            })
        ],
            
    },
}