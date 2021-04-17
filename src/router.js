import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/Home';
import EscapingComment from '@/components/EscapingComment';
import EscapingHref from '@/components/EscapingHref';
import EscapingOnLoad from '@/components/EscapingOnLoad';
import EscapingTag from '@/components/EscapingTag';
import EscapingValue from '@/components/EscapingValue';
import SimpleComment from '@/components/SimpleComment';
import SimpleTag from '@/components/SimpleTag';
import SimpleValue from '@/components/SimpleValue';
import PostData from '@/components/PostData';
import ReadData from '@/components/ReadData';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/escapingComment',
        name: 'EscapingComment',
        component: EscapingComment
    },
    {
        path: '/escapingHref',
        name: 'EscapingHref',
        component: EscapingHref
    },
    {
        path: '/escapingOnload',
        name: 'EscapingOnLoad',
        component: EscapingOnLoad
    },
    {
        path: '/escapingTag',
        name: 'EscapingTag',
        component: EscapingTag
    },
    {
        path: '/escapingValue',
        name: 'EscapingValue',
        component: EscapingValue
    },
    {
        path: '/simpleComment',
        name: 'SimpleComment',
        component: SimpleComment
    },
    {
        path: '/simpleTag',
        name: 'SimpleTag',
        component: SimpleTag
    },
    {
        path: '/simpleValue',
        name: 'SimpleValue',
        component: SimpleValue
    },
    {
        path: '/postData',
        name: 'PostData',
        component: PostData
    },
    {
        path: '/readData',
        name: 'ReadData',
        component: ReadData
    },
]

const router = createRouter({ history: createWebHistory(), routes })
export default router
