/* eslint-disable sonarjs/no-duplicate-string */
import { K8sDeploymentsData } from 'api/infraMonitoring/getK8sDeploymentsList';
import { PANEL_TYPES } from 'constants/queryBuilder';
import { GetQueryResultsProps } from 'lib/dashboard/getQueryResults';
import { DataTypes } from 'types/api/queryBuilder/queryAutocompleteResponse';
import { EQueryType } from 'types/common/dashboard';
import { DataSource } from 'types/common/queryBuilder';
import { v4 } from 'uuid';

export const deploymentWidgetInfo = [
	{
		title: 'CPU usage, request, limits',
		yAxisUnit: '',
	},
	{
		title: 'Memory usage, request, limits)',
		yAxisUnit: 'bytes',
	},
	{
		title: 'Network IO',
		yAxisUnit: 'binBps',
	},
	{
		title: 'Network error count',
		yAxisUnit: '',
	},
];

export const getDeploymentMetricsQueryPayload = (
	deployment: K8sDeploymentsData,
	start: number,
	end: number,
): GetQueryResultsProps[] => [
	{
		selectedTime: 'GLOBAL_TIME',
		graphType: PANEL_TYPES.TIME_SERIES,
		query: {
			builder: {
				queryData: [
					{
						aggregateAttribute: {
							dataType: DataTypes.Float64,
							id: 'k8s_pod_cpu_utilization--float64--Gauge--true',
							isColumn: true,
							isJSON: false,
							key: 'k8s_pod_cpu_utilization',
							type: 'Gauge',
						},
						aggregateOperator: 'avg',
						dataSource: DataSource.METRICS,
						disabled: false,
						expression: 'A',
						filters: {
							items: [
								{
									id: 'aec60cba',
									key: {
										dataType: DataTypes.String,
										id: 'k8s_deployment_name--string--tag--false',
										isColumn: false,
										isJSON: false,
										key: 'k8s_deployment_name',
										type: 'tag',
									},
									op: '=',
									value: deployment.meta.k8s_deployment_name,
								},
							],
							op: 'AND',
						},
						functions: [],
						groupBy: [],
						having: [],
						legend: 'usage',
						limit: null,
						orderBy: [],
						queryName: 'A',
						reduceTo: 'avg',
						spaceAggregation: 'sum',
						stepInterval: 60,
						timeAggregation: 'avg',
					},
					{
						aggregateAttribute: {
							dataType: DataTypes.Float64,
							id: 'k8s_container_cpu_request--float64--Gauge--true',
							isColumn: true,
							isJSON: false,
							key: 'k8s_container_cpu_request',
							type: 'Gauge',
						},
						aggregateOperator: 'avg',
						dataSource: DataSource.METRICS,
						disabled: false,
						expression: 'B',
						filters: {
							items: [
								{
									id: 'd047ec14',
									key: {
										dataType: DataTypes.String,
										id: 'k8s_pod_name--string--tag--false',
										isColumn: false,
										isJSON: false,
										key: 'k8s_pod_name',
										type: 'tag',
									},
									op: 'contains',
									value: deployment.meta.k8s_deployment_name,
								},
							],
							op: 'AND',
						},
						functions: [],
						groupBy: [],
						having: [],
						legend: 'requests',
						limit: null,
						orderBy: [],
						queryName: 'B',
						reduceTo: 'avg',
						spaceAggregation: 'sum',
						stepInterval: 60,
						timeAggregation: 'avg',
					},
					{
						aggregateAttribute: {
							dataType: DataTypes.Float64,
							id: 'k8s_container_cpu_limit--float64--Gauge--true',
							isColumn: true,
							isJSON: false,
							key: 'k8s_container_cpu_limit',
							type: 'Gauge',
						},
						aggregateOperator: 'avg',
						dataSource: DataSource.METRICS,
						disabled: false,
						expression: 'C',
						filters: {
							items: [
								{
									id: '750b7856',
									key: {
										dataType: DataTypes.String,
										id: 'k8s_pod_name--string--tag--false',
										isColumn: false,
										isJSON: false,
										key: 'k8s_pod_name',
										type: 'tag',
									},
									op: 'contains',
									value: deployment.meta.k8s_deployment_name,
								},
							],
							op: 'AND',
						},
						functions: [],
						groupBy: [],
						having: [],
						legend: 'limits',
						limit: null,
						orderBy: [],
						queryName: 'C',
						reduceTo: 'avg',
						spaceAggregation: 'sum',
						stepInterval: 60,
						timeAggregation: 'avg',
					},
				],
				queryFormulas: [],
			},
			clickhouse_sql: [
				{
					disabled: false,
					legend: '',
					name: 'A',
					query: '',
				},
			],
			id: v4(),
			promql: [
				{
					disabled: false,
					legend: '',
					name: 'A',
					query: '',
				},
			],
			queryType: EQueryType.QUERY_BUILDER,
		},
		variables: {},
		formatForWeb: false,
		start,
		end,
	},
	{
		selectedTime: 'GLOBAL_TIME',
		graphType: PANEL_TYPES.TIME_SERIES,
		query: {
			builder: {
				queryData: [
					{
						aggregateAttribute: {
							dataType: DataTypes.Float64,
							id: 'k8s_pod_memory_usage--float64--Gauge--true',
							isColumn: true,
							isJSON: false,
							key: 'k8s_pod_memory_usage',
							type: 'Gauge',
						},
						aggregateOperator: 'avg',
						dataSource: DataSource.METRICS,
						disabled: false,
						expression: 'A',
						filters: {
							items: [
								{
									id: '768c2f47',
									key: {
										dataType: DataTypes.String,
										id: 'k8s_deployment_name--string--tag--false',
										isColumn: false,
										isJSON: false,
										key: 'k8s_deployment_name',
										type: 'tag',
									},
									op: '=',
									value: deployment.meta.k8s_deployment_name,
								},
							],
							op: 'AND',
						},
						functions: [],
						groupBy: [],
						having: [],
						legend: 'usage',
						limit: null,
						orderBy: [],
						queryName: 'A',
						reduceTo: 'avg',
						spaceAggregation: 'sum',
						stepInterval: 60,
						timeAggregation: 'avg',
					},
					{
						aggregateAttribute: {
							dataType: DataTypes.Float64,
							id: 'k8s_container_memory_request--float64--Gauge--true',
							isColumn: true,
							isJSON: false,
							key: 'k8s_container_memory_request',
							type: 'Gauge',
						},
						aggregateOperator: 'avg',
						dataSource: DataSource.METRICS,
						disabled: false,
						expression: 'B',
						filters: {
							items: [
								{
									id: '1a96fa81',
									key: {
										dataType: DataTypes.String,
										id: 'k8s_pod_name--string--tag--false',
										isColumn: false,
										isJSON: false,
										key: 'k8s_pod_name',
										type: 'tag',
									},
									op: 'contains',
									value: deployment.meta.k8s_deployment_name,
								},
							],
							op: 'AND',
						},
						functions: [],
						groupBy: [],
						having: [],
						legend: 'requests',
						limit: null,
						orderBy: [],
						queryName: 'B',
						reduceTo: 'avg',
						spaceAggregation: 'sum',
						stepInterval: 60,
						timeAggregation: 'avg',
					},
					{
						aggregateAttribute: {
							dataType: DataTypes.Float64,
							id: 'k8s_container_memory_limit--float64--Gauge--true',
							isColumn: true,
							isJSON: false,
							key: 'k8s_container_memory_limit',
							type: 'Gauge',
						},
						aggregateOperator: 'avg',
						dataSource: DataSource.METRICS,
						disabled: false,
						expression: 'C',
						filters: {
							items: [
								{
									id: 'e69a2b7e',
									key: {
										dataType: DataTypes.String,
										id: 'k8s_pod_name--string--tag--false',
										isColumn: false,
										isJSON: false,
										key: 'k8s_pod_name',
										type: 'tag',
									},
									op: 'contains',
									value: deployment.meta.k8s_deployment_name,
								},
							],
							op: 'AND',
						},
						functions: [],
						groupBy: [],
						having: [],
						legend: 'limits',
						limit: null,
						orderBy: [],
						queryName: 'C',
						reduceTo: 'avg',
						spaceAggregation: 'sum',
						stepInterval: 60,
						timeAggregation: 'avg',
					},
				],
				queryFormulas: [],
			},
			clickhouse_sql: [
				{
					disabled: false,
					legend: '',
					name: 'A',
					query: '',
				},
			],
			id: v4(),
			promql: [
				{
					disabled: false,
					legend: '',
					name: 'A',
					query: '',
				},
			],
			queryType: EQueryType.QUERY_BUILDER,
		},
		variables: {},
		formatForWeb: false,
		start,
		end,
	},
	{
		selectedTime: 'GLOBAL_TIME',
		graphType: PANEL_TYPES.TIME_SERIES,
		query: {
			builder: {
				queryData: [
					{
						aggregateAttribute: {
							dataType: DataTypes.Float64,
							id: 'k8s_pod_network_io--float64--Sum--true',
							isColumn: true,
							isJSON: false,
							key: 'k8s_pod_network_io',
							type: 'Sum',
						},
						aggregateOperator: 'rate',
						dataSource: DataSource.METRICS,
						disabled: false,
						expression: 'A',
						filters: {
							items: [
								{
									id: '8b550f6d',
									key: {
										dataType: DataTypes.String,
										id: 'k8s_deployment_name--string--tag--false',
										isColumn: false,
										isJSON: false,
										key: 'k8s_deployment_name',
										type: 'tag',
									},
									op: '=',
									value: deployment.meta.k8s_deployment_name,
								},
							],
							op: 'AND',
						},
						functions: [],
						groupBy: [
							{
								dataType: DataTypes.String,
								id: 'direction--string--tag--false',
								isColumn: false,
								isJSON: false,
								key: 'direction',
								type: 'tag',
							},
							{
								dataType: DataTypes.String,
								id: 'interface--string--tag--false',
								isColumn: false,
								isJSON: false,
								key: 'interface',
								type: 'tag',
							},
						],
						having: [],
						legend: '{{direction}} :: {{interface}}',
						limit: null,
						orderBy: [],
						queryName: 'A',
						reduceTo: 'avg',
						spaceAggregation: 'sum',
						stepInterval: 60,
						timeAggregation: 'rate',
					},
				],
				queryFormulas: [],
			},
			clickhouse_sql: [
				{
					disabled: false,
					legend: '',
					name: 'A',
					query: '',
				},
			],
			id: v4(),
			promql: [
				{
					disabled: false,
					legend: '',
					name: 'A',
					query: '',
				},
			],
			queryType: EQueryType.QUERY_BUILDER,
		},
		variables: {},
		formatForWeb: false,
		start,
		end,
	},
	{
		selectedTime: 'GLOBAL_TIME',
		graphType: PANEL_TYPES.TIME_SERIES,
		query: {
			builder: {
				queryData: [
					{
						aggregateAttribute: {
							dataType: DataTypes.Float64,
							id: 'k8s_pod_network_errors--float64--Sum--true',
							isColumn: true,
							isJSON: false,
							key: 'k8s_pod_network_errors',
							type: 'Sum',
						},
						aggregateOperator: 'increase',
						dataSource: DataSource.METRICS,
						disabled: false,
						expression: 'A',
						filters: {
							items: [
								{
									id: 'e16c1e4a',
									key: {
										dataType: DataTypes.String,
										id: 'k8s_deployment_name--string--tag--false',
										isColumn: false,
										isJSON: false,
										key: 'k8s_deployment_name',
										type: 'tag',
									},
									op: '=',
									value: deployment.meta.k8s_deployment_name,
								},
							],
							op: 'AND',
						},
						functions: [],
						groupBy: [
							{
								dataType: DataTypes.String,
								id: 'direction--string--tag--false',
								isColumn: false,
								isJSON: false,
								key: 'direction',
								type: 'tag',
							},
							{
								dataType: DataTypes.String,
								id: 'interface--string--tag--false',
								isColumn: false,
								isJSON: false,
								key: 'interface',
								type: 'tag',
							},
						],
						having: [],
						legend: '{{direction}} :: {{interface}}',
						limit: null,
						orderBy: [],
						queryName: 'A',
						reduceTo: 'avg',
						spaceAggregation: 'sum',
						stepInterval: 60,
						timeAggregation: 'increase',
					},
				],
				queryFormulas: [],
			},
			clickhouse_sql: [
				{
					disabled: false,
					legend: '',
					name: 'A',
					query: '',
				},
			],
			id: v4(),
			promql: [
				{
					disabled: false,
					legend: '',
					name: 'A',
					query: '',
				},
			],
			queryType: EQueryType.QUERY_BUILDER,
		},
		variables: {},
		formatForWeb: false,
		start,
		end,
	},
];
