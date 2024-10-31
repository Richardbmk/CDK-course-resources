#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { MyStarterAppStack } from '../lib/my-starter-app-stack';

const app = new cdk.App();
new MyStarterAppStack(app, 'MyStarterAppStack', {});