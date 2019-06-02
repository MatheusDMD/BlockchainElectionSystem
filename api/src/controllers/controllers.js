export const vote = async (Election, candidateId, address) => {
    return await Election.deployed()
        .then((deployed) => { return deployed.vote(candidateId, {from: address}) })
        .catch((error) => { return error })
}

export const getCandidatesCount = async (Election) => {
    return await Election.deployed()
        .then((deployed) => { return deployed.getCandidatesCount() })
        .then((count) => { return count })
        .catch((error) => { return error })
}

export const getCandidateInfo = async (Election, candidateId) => {
    return await Election.deployed()
        .then((deployed) => { return deployed.getCandidateInfo(candidateId) })
        .then((candidateInfo) => { return candidateInfo })
        .catch((error) => { return error })
}

export const getCandidateVoteCount = async (Election, candidateId) => {
    return await Election.deployed()
        .then((deployed) => { return deployed.getCandidateVoteCount(candidateId) })
        .then((candidateVoteCount) => { return candidateVoteCount })
        .catch((error) => { return error })
}

export const getElectionHasFinished = async (Election) => {
    return await Election.deployed()
        .then((deployed) => { return deployed.getHasFinished() })
        .catch((error) => { return error })
}

export const endElection = async (Election, address) => {
    return await Election.deployed()
        .then((deployed) => { return deployed.endElection({from: address})})
        .catch((error) => { return error})
}

export const addCandidate = async (Election, name, party, address) => {
    return await Election.deployed()
        .then((deployed) => { return deployed.addCandidate(name, party, {from: address})})
        .catch((error) => { return error})
}