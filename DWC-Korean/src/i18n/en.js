export default {
	language: '한국어',
	'$vuetify': {
		badge: 'Badge',
		close: 'Close',
		dataIterator: {
			noResultsText: 'No matching records found',
			loadingText: 'Loading items...',
		},
		dataTable: {
			itemsPerPageText: 'Rows per page:',
			ariaLabel: {
				sortDescending: 'Sorted descending.',
				sortAscending: 'Sorted ascending.',
				sortNone: 'Not sorted.',
				activateNone: 'Activate to remove sorting.',
				activateDescending: 'Activate to sort descending.',
				activateAscending: 'Activate to sort ascending.',
			},
			sortBy: 'Sort by',
		},
		dataFooter: {
			itemsPerPageText: 'Items per page:',
			itemsPerPageAll: 'All',
			nextPage: 'Next page',
			prevPage: 'Previous page',
			firstPage: 'First page',
			lastPage: 'Last page',
			pageText: '{0}-{1} of {2}',
		},
		datePicker: {
			itemsSelected: '{0} selected',
		},
		noDataText: 'No data available',
		carousel: {
			prev: 'Previous visual',
			next: 'Next visual',
			ariaLabel: {
				delimiter: 'Carousel slide {0} of {1}',
			},
		},
		calendar: {
			moreEvents: '{0} more',
		},
		fileInput: {
			counter: '{0} files',
			counterSize: '{0} files ({1} in total)',
		},
		timePicker: {
			am: 'AM',
			pm: 'PM',
		},
	},
	button: {
		add: {
			caption: '추가'
		},
		connect: {
			connect: '연결',
			connecting: '연결중...',
			disconnect: '연결끊기',
			disconnecting: '연결끊는중...'
		},
		emergencyStop: {
			caption: '비상정지',
			title: '강제 재시작(SW) (M112+M999)'
		},
		home: {
			caption: 'Home {0}',
			captionAll: 'Home All',
			title: 'Home the {0} axis (G28 {0})',
			titleAll: 'Home all axes (G28)'
		},
		newDirectory: {
			caption: '새 폴더'
		},
		newFilament: {
			caption: '새 필라멘트'
		},
		newFile: {
			caption: '새 파일'
		},
		refresh: {
			caption: '새로고침'
		},
		reset: {
			caption: '기계 리셋',
			title: 'M999를 보내서 기계를 리셋하세요.'
		},
		upload: {
			gcodes: {
				caption: 'G-Code 업로드',
				title: 'Upload one or more G-Code files (drag&drop is supported as well)'
			},
			start: {
				caption: '업로드 & 시작',
				title: 'Upload & Start one or more G-Code files (drag&drop is supported as well)'
			},
			macros: {
				caption: '매크로 업로드',
				title: 'Upload one or more macro files (drag&drop is supported as well)'
			},
			filaments: {
				caption: '필라멘트 설정 업로드',
				title: 'Upload one or more filament configurations (drag&drop is supported as well)'
			},
			menu: {
				caption: '메뉴 파일 업로드',
				title: 'Upload one or more menu files (drag&drop is supported as well)'
			},
			system: {
				caption: '시스템 파일 업로드',
				title: 'Upload one or more system files (drag&drop is supported as well)'
			},
			web: {
				caption: '웹 파일 업로드',
				title: 'Upload one or more web files (drag&drop is supported as well)'
			},
			update: {
				caption: '업데이트 파일 업로드',
				title: 'Upload an update package (drag&drop is supported as well)'
			}
		}
	},
	chart: {
		layer: {
			caption: '레이어',
			layerTime: 'Layer Time',

			showLastLayers: 'Show Last {0} Layers',
			showAllLayers: 'Show All Layers',

			layer: 'Layer {0}',
			layerDuration: 'Duration: {0}',
			layerHeight: 'Layer Height: {0}',
			filamentUsage: 'Filament Usage: {0}',
			fractionPrinted: 'File Progress: {0}'
		},
		temperature: {
			caption: '온도 차트',
			heater: '가열기 {0}',
			noData: '데이터 없음'
		}
	},
	dialog: {
		changeMoveStep: {
			title: 'Change move step',
			prompt: 'Please enter a new value for the clicked move button:'
		},
		configUpdated: {
			title: '보드를 리셋 하겠습니까?',
			prompt: 'Would you like to restart your board to apply the updated configuration?'
		},
		connect: {
			title: '기계 연결하기',
			prompt: '연결하고 싶은 기계의 호스트네임과 비밀번호를 입력해주세요:',
			hostPlaceholder: 'Hostname',
			hostRequired: 'Hostname is required',
			passwordPlaceholderOptional: 'Password (optional)',
			passwordPlaceholder: 'Password',
			passwordRequired: 'Password is required',
			connect: '연결'
		},
		connection: {
			connecting: '연결중...',
			disconnecting: '연결끊는중...',
			updating: '업데이트가 설치 될 때 까지 기다려주세요...',
			reconnecting: '연결이 끊겼습니다. 재연결을 시도합니다...',
			standBy: '기다려주세요...'
		},
		editExtrusionAmount: {
			title: '추출량 조절',
			prompt: 'Please enter a new amount for the clicked button:'
		},
		editExtrusionFeedrate: {
			title: '추출 속도 저절',
			prompt: 'Please enter a new feedrate for the clicked button:'
		},
		factoryReset: {
			title: '공장초기화를 하시겠습니까?',
			prompt: 'Are you sure you wish to perform a factory reset? All saved settings will be lost.'
		},
		filament: {
			titleChange: '필라멘트 바꾸기',
			titleLoad: '필파멘트 넣기',
			prompt: '팔라멘트를 골라주세요:'
		},
		fileEdit: {
			gcodeReference: 'G-Code Reference',
			menuReference: 'Menu Reference',
			save: '저장',
			confirmClose: 'The file has been changed. If you proceed, your changes will be lost.'
		},
		meshEdit: {
			title: 'Set Mesh Parameters',
			radius: 'Probe Radius',
			spacing: 'Spacing',
			startCoordinate: 'Start coordinate in {0} direction',
			endCoordinate: 'End coordinate in {0} direction',
			spacingDirection: 'Spacing in {0} direction'
		},
		newDirectory: {
			title: '새 폴더',
			prompt: 'Please enter a new directory name:'
		},
		newFilament: {
			title: '새 필라멘트',
			prompt: 'Please enter a name for the new filament:'
		},
		newFile: {
			title: '새 파일',
			prompt: 'Please enter a new file name:'
		},
		renameFile: {
			title: '이름변경',
			prompt: 'Please enter a new name:'
		},
		resetHeaterFault: {
			title: 'Reset Heater Fault',
			prompt: 'A heater fault has occurred on heater {0}. It is strongly advised to turn off your machine now and to check your wiring before you continue. If you are absolutely sure that this is not a phsical problem, you can reset the heater fault ON YOUR OWN RISK. Be aware that this is NOT RECOMMENDED and can lead to further problems. How would you like to proceed?',
			resetFault: 'Reset Fault'
		},
		runMacro: {
			title: '매크로 시작하기 {0}',
			prompt: 'Do you want to run {0}?'
		},
		startJob: {
			title: 'G-Code 시작하기 {0}',
			prompt: 'Do you want to start {0}?'
		},
		update: {
			title: '업데이트를 설치할까요?',
			prompt: 'You have uploaded at least one firmware update. Would you like to install them now?'
		},
		inputRequired: '값이 필요합니다.',
		numberRequired: '유효한 숫자를 입력해주세요'
	},
	directory: {
		menu: '메뉴 폴더',
		filaments: '필라멘트 폴더',
		gcodes: 'G-Codes 폴더',
		macros: 'Macros 폴더',
		system: 'System 폴더',
		web: '웹 폴더'
	},
	error: {
		notImplemented: '{0} is not implemented',
		invalidPassword: 'Invalid password!',
		noFreeSession: 'No more free sessions!',
		connect: 'Failed to connect to {0}',
		disconnect: 'Could not disconnect cleanly from {0}',
		disconnected: 'Could not complete action because the connection has been terminated',
		cancelled: 'Operation has been cancelled',
		network: 'Network error',
		timeout: 'HTTP request timed out',
		driveUnmounted: 'Target drive is unmounted',
		directoryNotFound: 'Directory {0} not found',
		fileNotFound: 'File {0} not found',
		invalidHeightmap: 'Invalid Height Map',
		operationFailed: 'Operation failed (Reason: {0})',
		uploadStartWrongFileCount: 'Only a single file can be uploaded & started',
		uploadNoSingleZIP: 'Only a single ZIP file can be uploaded at once',
		uploadNoFiles: 'This ZIP does not contain any usable fiels',
		uploadDecompressionFailed: 'Failed to decompress ZIP file',
		codeResponse: 'Could not run code because a bad response has been received',
		codeBuffer: 'Could run code because the buffer space has been exhausted',
		enterValidNumber: 'Please enter a valid number',
		turnOffEverythingFailed: 'Failed to turn everything off',
		filelistRequestFailed: 'Failed to get file list',
		fileinfoRequestFailed: 'Failed to get file info for {0}',
		filamentsLoadFailed: 'Failed to load filaments',
		move: 'Failed to move {0} to {1}'
	},
	events: {
		connected: '{0} 에 연결했습니다.',
		connectionLost: '{0} 와 연결을 유지하는데 실패했습니다.',
		emergencyStop: '비상정지했습니다. 재연결을 시도합니다...',
		reconnecting: '연결이 중지되었습니다. 재연결을 시도합니다...',
		reconnected: '재연결이 되었습니다.',
		disconnected: '{0} 와의 연결이 끊겼습니다'
	},
	generic: {
		ok: '확인',
		cancel: '취소',
		yes: '수락',
		no: '거절',
		close: '닫기',
		reset: '리셋',
		noValue: 'n/a',
		loading: '불러오는중',
		error: '에러',
		info: '정보',
		warning: '경고',
		success: '성공',
		heaterStates: {
			off: '꺼짐',
			standby: '대기중',
			active: '활성',
			fault: '실패',
			tuning: '튜닝',
			offline: '오프라인'
		},
		status: {
			updating: '업데이트중',
			off: '꺼짐',
			halted: '중단됨',
			pausing: '일시중지중',
			paused: '일시중지됨',
			resuming: '재개중',
			printing: '프린트중',
			processing: '가공중',
			simulating: '시뮬레이팅중',
			busy: '바쁨',
			changingTool: '툴 바꾸는중',
			idle: '쉬는중',
			unknown: '모름'
		},
		rpm: 'RPM',
		sdCard: 'SD Card {0}',
		mounted: '탑재됨',
		notMounted: '탑재되지 않음',
		extracting: '추출중',
		uploading: '업로딩중',
		active: '활성',
		standby: '대기중'
	},
	input: {
		code: {
			send: '전송',
			placeholder: '여기에 G-Code입력...'
		},
		addTemperature: '새 온도',
		addRPM: '새 RPM'
	},
	jobProgress: {
		simulating: '시뮬레이팅 {0}, {1} complete',
		simulated: '시뮬레이팅 {0}, 100 % complete',
		processing: '가공 {0}, {1} complete',
		processed: '가공 {0}, 100 % complete',
		printing: '출력 {0}, {1} complete',
		printed: '출력 {0}, 100 % complete',
		noJob: '일 없음.',
		layer: 'Layer {0} of {1}',
		filament: '팔라멘트 사용량: {0}',
		filamentRemaining: '{0} 남음'
	},
	list: {
		baseFileList: {
			fileName: '파일이름',
			size: '크기',
			lastModified: '마지막 수정일자',
			download: '다운로드',
			edit: '수정',
			rename: '이름변경',
			delete: '삭제',
			downloadZIP: 'ZIP로 다운로드',
			noFiles: '아무것도 없음',
			driveUnmounted: '드라이브 연결되지 않음',
			goUp: '위로 가기'
		},
		menu: {
			noFiles: 'No Display Files'
		},
		eventLog: {
			date: '일자',
			type: '분류',
			message: '이벤트',
			noEvents: '이벤트 없음',
			clear: '비우기',
			downloadText: 'Text로 다운로드',
			downloadCSV: 'CSV로 다운로드'
		},
		filament: {
			noFilaments: '필라멘트 없음'
		},
		macro: {
			caption: '매크로',
			noMacros: '매크로 없음',
			run: '매크로 실행',
			root: 'Root'
		},
		jobs: {
			height: '물체 높이',
			layerHeight: '레이어 높이',
			filament: '필라멘트 사용량',
			printTime: '출력 시간',
			simulatedTime: '시뮬레이팅 시간',
			generatedBy: 'Generated by',

			noJobs: '작업 없음',
			start: '작업 시작',
			simulate: '시뮬레이트'
		},
		system: {
			noFiles: '시스템 파일 없음',
			configToolNote: 'edit via config tool'
		}
	},
	menu: {
		control: {
			caption: '기계 컨트롤',
			dashboard: '대시보드',
			console: '콘솔',
			heightmap: '높이맵'
		},
		job: {
			caption: '현재 작업',
			status: '상태',
			webcam: '웹캠',
			visualiser: '시각화'
		},
		files: {
			caption: '파일 관리',
			jobs: '작업',
			filaments: '필라멘트',
			macros: '매크로',
			menu: '디스플레이',
			system: '시스템',
			web: '웹'
		},
		settings: {
			caption: '설정',
			general: '일반',
			machine: '기계',
			update: '업데이트'
		}
	},
	notification: {
		compress: {
			title: 'Compressing files...',
			message: 'Please stand by while your files are being compressed...',
			errorTitle: 'Failed to compress files'
		},
		delete: {
			errorTitle: 'Failed to delete {0}',
			errorMessageDirectory: 'Please make sure that this directory is empty',
			success: 'Successfully deleted {0}',
			successMultiple: 'Successfully deleted {0} items'
		},
		deleteFilament: {
			errorTitle: 'Failed to delete filament(s)',
			errorStillLoaded: 'At least one of the selected filaments is still loaded. Please unload them before you proceed',
			errorSubDirectories: 'The filament {0} contains sub-directories. Please delete them manually and try again.'
		},
		download: {
			title: 'Downloading {0} @ {1}, {2}% complete',
			message: 'Please stand by while the file is being downloaded...',
			success: 'Download of {0} successful after {1}',
			successMulti: 'Successfully downloaded {0} files',
			error: 'Failed to download {0}'
		},
		message: 'Message',
		mount: {
			successTitle: 'SD card mounted',
			errorTitle: 'Failed to mount SD card'
		},
		newDirectory: {
			errorTitle: 'Failed to create directory',
			successTitle: 'Directory created',
			successMessage: 'Successfully created directory {0}'
		},
		newFilament: {
			errorTitle: 'Failed to create filament',
			errorTitleMacros: 'Failed to create filament macros',
			successTitle: 'Filament created',
			successMessage: 'Successfully created filament {0}'
		},
		rename: {
			success: 'Successfully renamed {0} to {1}',
			error: 'Failed to rename {0} to {1}',
		},
		renameFilament: {
			errorTitle: 'Failed to rename filament',
			errorStillLoaded: 'This filament is still loaded. Please unload it before you proceed'
		},
		responseTooLong: 'Response too long, see Console',
		upload: {
			title: 'Uploading {0} @ {1}, {2}% complete',
			message: 'Please stand by while the file is being uploaded...',
			success: 'Upload of {0} successful after {1}',
			successMulti: 'Successfully uploaded {0} files',
			error: 'Failed to upload {0}'
		}
	},
	panel: {
		atx: {
			caption: 'ATX Power',
			on: 'On',
			off: 'Off'
		},
		babystepping: {
			caption: 'Z Babystepping',
			current: '현재 오프셋: {0}'
		},
		extrude: {
			caption: '추출 조절',
			mix: 'Mix',
			mixRatio: 'Mix Ratio:',
			amount: '추출량({0})',
			feedrate: '추출속도({0})',
			retract: '흡입',
			extrude: '추출'
		},
		extrusionFactors: {
			caption: '추출기 배율',
			changeVisibility: '가시성 변경',
			extruder: '추출기 {0}',
			noExtruders: '추출기 없음'
		},
		fan: {
			caption: 'Fan Control',
			selection: 'Fan Selection:',
			toolFan: 'Tool Fan',
			fan: 'Fan {0}'
		},
		fans: {
			caption: '쿨러',
			changeVisibility: 'Change Visibility',
			toolFan: '툴 쿨러',
			fan: '쿨러 {0}',
			noFans: '쿨러 없음'
		},
		heightmap: {
			scale: 'Scale:',
			orMore: '이상',
			orLess: '이하',
			axes: '축들:',
			notAvailable: '높이 맵 사용이 불가합니다.',
			numPoints: '포인트의 갯수: {0}',
			radius: '조사 반경: {0}',
			area: '조사 공간: {0}',
			maxDeviations: '최대 편차: {0} / {1}',
			meanError: '평균 에러: {0}',
			rmsError: 'RMS 에러: {0}',
			topView: '평면도',
			colorScheme: '필터',
			terrain: '지형',
			heat: '가열',
			reload: '높이 맵 다시 불러오기'
		},
		jobControl: {
			caption: '작업 조정',
			cancelJob: '작업 취소',
			cancelPrint: '출력 취소',
			cancelSimulation: '시뮬레이팅 취소',
			pauseJob: '작업 일시중지',
			pausePrint: '출력 일시중지',
			pauseSimulation: '시뮬레이팅 일시중지',
			resumeJob: '작업 재개',
			resumePrint: '출력 재개',
			resumeSimulation: '시뮬레이팅 재개',
			repeatJob: '재 시작',
			repeatPrint: '재 출력',
			repeatSimulation: '재 시뮬레이팅',
			autoSleep: '자동 수면'
		},
		jobData: {
			caption: '수집된 데이터',
			warmUpDuration: '예얼 시간',
			currentLayerTime: '현재 레이어 시간',
			lastLayerTime: '마지막 레이어 시작',
			jobDuration: '작업 진행 시간'
		},
		jobEstimations: {
			caption: '추정',
			filament: '필라멘트 사용량',
			file: '파일 진행',
			layer: '레이어 시간',
			slicer: 'Slicer',
			simulation: '시뮬레이팅'
		},
		jobInfo: {
			caption: '작업 정보',
			height: '높이:',
			layerHeight: '레이어 높이:',
			filament: '필라멘트 사용량:',
			generatedBy: 'Generated by:'
		},
		movement: {
			caption: '기계 이동',
			compensation: 'Compensation & Calibration',
			runBed: 'True Bed Levelling (G32)',
			runDelta: 'Delta Calibration (G32)',
			compensationInUse: 'Compensation in use: {0}',
			disableBedCompensation: 'Disable Bed Compensation (M561)',
			disableMeshCompensation: 'Disable Mesh Compensation (G29 S2)',
			editMesh: 'Define Area for Mesh Compensation (M557)',
			runMesh: 'Run Mesh Compensation (G29)',
			loadMesh: 'Load Saved Height Map from SD Card (G29 S1)',
			axesNotHomed: 'The following axis is not homed:|The following axes are not homed:',
			noAxes: '축 없음'
		},
		settingsAbout: {
			caption: 'About',
			developedBy: 'Web Interface developed by',
			for: 'for',
			licensedUnder: 'Licensed under the terms of the'
		},
		settingsAppearance: {
			caption: 'UI',
			darkTheme: '다크테마',
			language: '언어',
			binaryFileSizes: 'Use binary file sizes',
			binaryFileSizesTitle: 'File sizes are displayed with a basis of 1024 (IEC) instead of 1000 (SI)',
			disableAutoComplete: 'Disable auto-completion',
			disableAutoCompleteTitle: 'Do not show auto-complete list when typing in code or temperature inputs'
		},
		settingsCommunication: {
			caption: '통신',
			pingInterval: 'PING interval when idle (ms)',
			ajaxRetries: 'Number of maximum AJAX retries',
			updateInterval: 'Update interval ({0})',
			extendedUpdateEvery: 'Extended status update interval',
			fileTransferRetryThreshold: 'Retry threshold for file transfers ({0})',
			crcUploads: 'Use CRC32 checksums for uploads',
			unavailable: 'No settings available'
		},
		settingsElectronics: {
			caption: 'Electronics',
			diagnostics: 'Diagnostics',
			board: 'Board: {0}',
			firmware: 'Firmware: {0} ({1})',
			dwsFirmware: 'Duet WiFi Server Version: {0}',
			updateNote: 'Note: You can install updates on the System page.'
		},
		settingsEndstops: {
			caption: 'Endstops',
			index: 'Index',
			triggered: 'Triggered'
		},
		settingsGeneral: {
			caption: '일반',
			factoryReset: 'Revert to factory defaults',
			settingsStorageLocal: '로컬디스크에 세팅 저장',
			settingsSaveDelay: '세팅 업데이터 주기 ({0})',
			cacheStorageLocal: '로컬디스크에 캐시 저장',
			cacheSaveDelay: '캐시 업데이트 주기 ({0})'
		},
		settingsListItems: {
			caption: '아이템 리스트',
			toolTemperatures: '툴 온도',
			bedTemperatures: '베드 온도',
			chamberTemperatures: '챔버 온도',
			spindleRPM: 'Spindle RPM'
		},
		settingsMachine: {
			caption: '기계',
			revertDWC: 'Revert to DWC1',
			babystepAmount: 'Babystep amount ({0})',
			moveFeedrate: 'Feedrate for move buttons ({0})'
		},
		settingsNotifications: {
			caption: '알림',
			notificationErrorsPersistent: '에러 메시지를 자동으로 끄지 않기',
			notificationTimeout: '에러 메시지 최대 잔류 시간(ms) ({0})'
		},
		settingsWebcam: {
			caption: '웹캠',
			webcamURL: 'Webcam URL (optional)',
			webcamUpdateInterval: 'Webcam update interval ({0})',
			webcamLiveURL: 'URL to open when Webcam image is clicked (optional)',
			webcamFix: 'Do not append extra HTTP qualifier when reloading images',
			webcamEmbedded: 'Embed webcam image in an iframe',
			webcamRotation: 'Rotate webcam image',
			webcamFlip: 'Flip webcam image',
			flipNone: 'None',
			flipX: 'Flip X',
			flipY: 'Flip Y',
			flipBoth: 'Flip both'
		},
		speedFactor: {
			caption: '속도 배율'
		},
		status: {
			caption: '상태',
			mode: '모드: {0}',
			toolPosition: '툴 위치',
			machinePosition: 'Machine Position',
			extruders: '추출기 드라이브',
			extruderDrive: '드라이브 {0}',
			speeds: '속도',
			requestedSpeed: '요청 속도',
			topSpeed: '최고 속도',
			sensors: '센서',
			mcuTemp: 'MCU 온도',
			minMax: '최소: {0}, 최대 {1}',
			vIn: 'Vin',
			v12: 'V12',
			fanRPM: 'Fan RPM',
			probe: 'Z-Probe|Z-Probes',
			noStatus: 'No Status'
		},
		tools: {
			caption: '툴즈',
			controlAll: '일괄 제어',
			turnEverythingOff: '일괄 종료',
			allActiveTemperatures: '활성 온도 설정',
			allStandbyTemperatures: '대기 온도 설정',
			tool: '툴 {0}',
			loadFilament: '필라멘트 넣기',
			changeFilament: '필레멘트 바꾸기',
			unloadFilament: '필라멘트 빼기',
			heater: '가열기 {0}',
			current: '현재',
			active: '활성',
			standby: '대기',
			bed: '베드 {0}',
			chamber: 'Chamber {0}',
			extra: {
				caption: '기타',
				sensor: '센서',
				sensorIndex: '센서 {0}',
				value: '값',
				showInChart: '차트에서 보기',
				noItems: '센서 없음'
			},
			noTools: '툴 없음'
		},
		webcam: {
			caption: 'Webcam Surveillance',
			alt: '(webcam image)'
		}
	}
}
