// This is supposed to do what the demo script of the apimodule does, but for the new client SDK
// Ref: https://github.com/ixofoundation/ixo-apimodule/blob/master/test/demo.ts


const
    readline = require('readline'),
    {inspect} = require('util'),
    {makeWallet, makeClient} = require('..'),
    makeDummyProj = require('./makeDummyProj')


const main = async ({creatorMnemonic = null, providerMnemonic = null}) => {
    const
        creatorWallet = await makeWallet(creatorMnemonic),
        providerWallet = await makeWallet(providerMnemonic),
        [{address: creatorAddr}] = await creatorWallet.agent.getAccounts(),
        [{address: agentAddr}] = await providerWallet.agent.getAccounts()

    console.info('Wallets created', creatorWallet, providerWallet)

    await prompt(`Please fund the addresses ${creatorAddr} and ${agentAddr} and hit enter when it is done`)

    const
        creatorCli = makeClient(creatorWallet),
        providerCli = makeClient(providerWallet)

    console.info('Registering new wallets')

    await Promise.all([
        creatorCli.register(),
        providerCli.register(),
    ])

    console.info('Registration complete. Waiting (10s)...')
    await sleep(10)

    const projTxHash =
        await creatorCli.createProject(makeDummyProj(creatorWallet.agent.did))

    console.info('Project created. Waiting (60 secs)...')
    await sleep(60)

    const projRec =
        (await creatorCli.listProjects())
            .find(p => p.txHash == projTxHash)

    console.info('Project record', inspect(projRec, {depth: 10}))

    console.info('Updating project status to "PENDING"')
    await creatorCli.updateProjectStatus(projRec.projectDid, 'PENDING')

    const projectFundAddress =
        await creatorCli.getProjectFundAddress(projRec.projectDid)

    await prompt(`Please fund the address ${projectFundAddress} and hit enter when it is done`)

    console.info('Waiting a bit after project funding... (10 secs)')
    await sleep(10)

    await creatorCli.updateProjectStatus(projRec.projectDid, 'FUNDED')

    await creatorCli.updateProjectStatus(projRec.projectDid, 'STARTED')



    console.info('Creating provider agent')

    const providerAgentRec = await creatorCli.createAgent(projRec.projectDid, {
        did: providerWallet.agent.did,
        email: 'jack@ixo.world',
        name: 'Jack Smith',
        role: 'SA',
    })

    console.info('Agent created', providerAgentRec)

    await creatorCli.updateAgent(projRec.projectDid, providerWallet.agent.did, {
        status: '1',
        role: 'SA',
    })

    console.info('All is fine')
}

const prompt = query => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    })

    return new Promise(resolve =>
        rl.question(query, ans => {
            rl.close()
            resolve(ans)
        })
    )
}

const sleep = secs => new Promise(res => setTimeout(res, secs * 1000))


main().catch(console.error)
